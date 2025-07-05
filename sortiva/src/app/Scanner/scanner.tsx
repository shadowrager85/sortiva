"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import * as tmImage from "@teachablemachine/image";

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/CBJCb48V4/";

const DISPOSAL_INSTRUCTIONS: Record<string, string> = {
  "Plastic": "Recycle plastics in the plastic bin or reuse it to make something new eg toothbrush holder.",
  " Organic": "Compost organic waste or dispose in the organic bin.",
   "Electronics": "Take electronics to a special e-waste facility or dispose in the e-waste bin.",
};

export default function Scanner() {
  const webcamRef = useRef<tmImage.Webcam | null>(null);
  const modelRef = useRef<tmImage.CustomMobileNet | null>(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<{ type: string; instruction: string } | null>(null);
  const [progress, setProgress] = useState(0);
  const isMounted = useRef(true);

  const finishScan = useCallback((predictions: Record<string, number[]>) => {
    // Find class with highest average probability
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
    // Clear the model reference to prevent memory leaks
    modelRef.current = null;
  }, []);

  const scanForDuration = useCallback(async (webcam: tmImage.Webcam, seconds: number) => {
    const predictions: Record<string, number[]> = {};
    let elapsed = 0;
    const interval = 100; // ms
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

    // Remove any existing canvas before appending
    const container = document.getElementById("webcam-container");
    if (container) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(webcam.canvas);
    }
    await webcam.play();

    // Start scanning for 10 seconds
    scanForDuration(webcam, 10);
  }, [scanForDuration]);

  useEffect(() => {
    isMounted.current = true;
    if (scanning) {
      initModel();
    }
    // Cleanup on unmount
    return () => {
      isMounted.current = false;
      stopWebcam();
    };
  }, [scanning, initModel, stopWebcam]);

  return (
    <div className="flex flex-col items-center">
             <ThemeSwitch />
      <h1 className="text-shadow-emerald-400 text-2xl font-bold">Scanner</h1>
      <p className="text-gray-600 mb-4 text-center max-w-lg">
        Scan your waste item for 10 seconds. We&apos;ll identify the type and tell you how to dispose of it responsibly!
      </p>
      <div
        id="webcam-container"
        className={`border-4 rounded-xl bg-white shadow-md flex items-center justify-center w-[240px] h-[240px] mb-2 ${scanning ? "border-green-400 animate-pulse" : "border-gray-200"}`}
      />
      {scanning && (
        <div className="w-60 mt-2">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-400 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1 text-center">{progress}% Scanning...</p>
        </div>
      )}
      <button
        className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition"
        onClick={() => setScanning(true)}
        disabled={scanning}
      >
        {result ? "Scan Again" : "Start Scanning"}
      </button>
      {result && (
        <div className="mt-6 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center w-full max-w-md">
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            Detected: <span className="text-green-700">{result.type}</span>
          </h2>
          <p className="text-gray-700 text-center">{result.instruction}</p>
        </div>
      )}
    </div>
  );
}

