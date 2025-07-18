"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import * as tmImage from "@teachablemachine/image";

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/yCVWVbSOi/";

const DISPOSAL_INSTRUCTIONS: Record<string, string> = {
  "Plastic": "Recycle plastics in the plastic bin or reuse it to make something new eg toothbrush holder.",
  " Organic": "Compost organic waste or dispose in the organic bin.",
  "Electronics": "Take electronics to a special e-waste facility or dispose in the e-waste bin.",
  "Nothing": "Insert Wase In The Scanner",
  "Paper": "Recycle paper in the paper bin or reuse it for crafts.",
};

export default function Scanner() {
  const webcamRef = useRef<tmImage.Webcam | null>(null);
  const modelRef = useRef<tmImage.CustomMobileNet | null>(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<{ type: string; instruction: string } | null>(null);
  const [progress, setProgress] = useState(0);
  const isMounted = useRef(true);

  const finishScan = useCallback((predictions: Record<string, number[]>) => {
    let bestClass = "Other";
    let bestAvg = 0;
    Object.entries(predictions).forEach(([className, probs]) => {
      const avg = probs.reduce((a, b) => a + b, 0) / probs.length;
      if (avg > bestAvg) {
        bestAvg = avg;
        bestClass = className;
      }
    });
    setResult({
      type: bestClass,
      instruction: DISPOSAL_INSTRUCTIONS[bestClass] || "Dispose appropriately.",
    });
    setScanning(false);
    setProgress(100);
  }, []);

  const stopWebcam = useCallback(() => {
    if (webcamRef.current) {
      webcamRef.current.stop();
      if (webcamRef.current.canvas && webcamRef.current.canvas.parentNode) {
        webcamRef.current.canvas.parentNode.removeChild(webcamRef.current.canvas);
      }
      webcamRef.current = null;
    }
    modelRef.current = null;
  }, []);

  const scanForDuration = useCallback(async (webcam: tmImage.Webcam, seconds: number) => {
    const predictions: Record<string, number[]> = {};
    let elapsed = 0;
    const interval = 100;
    const totalTicks = (seconds * 1000) / interval;

    const intervalId = setInterval(async () => {
      if (!isMounted.current) {
        clearInterval(intervalId);
        return;
      }
      await webcam.update();
      if (!modelRef.current) return;
      const preds = await modelRef.current.predict(webcam.canvas);
      preds.forEach(pred => {
        if (!predictions[pred.className]) predictions[pred.className] = [];
        predictions[pred.className].push(pred.probability);
      });
      elapsed++;
      if (isMounted.current) {
        setProgress(Math.min(100, Math.round((elapsed / totalTicks) * 100)));
      }
      if (elapsed >= totalTicks) {
        clearInterval(intervalId);
        if (isMounted.current) {
          finishScan(predictions);
          stopWebcam();
        }
      }
    }, interval);
  }, [finishScan, stopWebcam, isMounted, modelRef, setProgress]);

  const initModel = useCallback(async () => {
    setResult(null);
    setProgress(0);
    const modelURL = `${MODEL_URL}model.json`;
    const metadataURL = `${MODEL_URL}metadata.json`;

    const model = await tmImage.load(modelURL, metadataURL);
    modelRef.current = model;

    const flip = true;
    const webcam = new tmImage.Webcam(224, 224, flip);
    let setupSuccess = false;
    try {
      await webcam.setup({ facingMode: "environment" });
      setupSuccess = true;
    } catch {
      setupSuccess = false;
    }
    if (!setupSuccess) {
      alert("Unable to access webcam. Please allow camera access and try again.");
      setScanning(false);
      return;
    }
    webcamRef.current = webcam;

    const container = document.getElementById("webcam-container");
    if (container) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(webcam.canvas);
    }
    await webcam.play();

    scanForDuration(webcam, 10);
  }, [scanForDuration]);

  useEffect(() => {
    isMounted.current = true;
    if (scanning) {
      initModel();
    }
    return () => {
      isMounted.current = false;
      stopWebcam();
    };
  }, [scanning, initModel, stopWebcam]);

  return (
    <>
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 px-4 py-8">
      <ThemeSwitch />
      <h1 className="text-3xl font-extrabold text-green-700 mb-2 drop-shadow-lg">Scanner</h1>
      <p className="text-gray-700 mb-6 text-center max-w-lg font-medium">
        Scan your waste item for <span className="font-bold text-green-600">10 seconds</span>. We&apos;ll identify the type and tell you how to dispose of it responsibly!
      </p>
      <div
        id="webcam-container"
        className={`border-4 rounded-2xl bg-white shadow-lg flex items-center justify-center w-[260px] h-[260px] mb-4 transition-all duration-300 ${
          scanning ? "border-green-400 animate-pulse" : "border-gray-300"
        }`}
      />
      {scanning && (
        <div className="w-64 mt-2">
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center font-semibold tracking-wide">{progress}% Scanning...</p>
        </div>
      )}
      <button
        className={`px-8 py-3 mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl font-bold shadow-lg hover:scale-105 hover:from-green-600 hover:to-green-800 transition-all duration-200 ${
          scanning ? "opacity-60 cursor-not-allowed" : ""
        }`}
        onClick={() => setScanning(true)}
        disabled={scanning}
      >
        {result ? "Scan Again" : "Start Scanning"}
      </button>
      {result && (
        <div className="mt-8 p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center w-full max-w-md border border-green-100">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            Detected: <span className="text-green-700">{result.type}</span>
          </h2>
          <p className="text-gray-800 text-center font-medium">{result.instruction}</p>
        </div>
      )}
    </div>
    </>
  );
}

