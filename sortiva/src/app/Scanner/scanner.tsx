"use client";

import { useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/CBJCb48V4/";

export default function Scanner() {
  const webcamRef = useRef<any>(null);
  const labelContainerRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<tmImage.CustomMobileNet | null>(null);
  const maxPredictionsRef = useRef<number>(0);

  useEffect(() => {
    initModel();
  }, []);

  const initModel = async () => {
    const modelURL = `${MODEL_URL}model.json`;
    const metadataURL = `${MODEL_URL}metadata.json`;

    const model = await tmImage.load(modelURL, metadataURL);
    modelRef.current = model;
    maxPredictionsRef.current = model.getTotalClasses();

    const flip = true;
    const webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(() => loop(webcam));

    webcamRef.current = webcam;
    document.getElementById("webcam-container")?.appendChild(webcam.canvas);

    if (labelContainerRef.current) {
      labelContainerRef.current.innerHTML = ""; // clear old labels
      for (let i = 0; i < maxPredictionsRef.current; i++) {
        labelContainerRef.current.appendChild(document.createElement("div"));
      }
    }
  };

  const loop = async (webcam: tmImage.Webcam) => {
    webcam.update();
    await predict(webcam);
    window.requestAnimationFrame(() => loop(webcam));
  };

  const predict = async (webcam: tmImage.Webcam) => {
    if (!modelRef.current || !labelContainerRef.current) return;

    const prediction = await modelRef.current.predict(webcam.canvas);
    prediction.forEach((pred, i) => {
      const classPrediction = `${pred.className}: ${pred.probability.toFixed(2)}`;
      if (labelContainerRef.current?.childNodes[i]) {
        (labelContainerRef.current.childNodes[i] as HTMLDivElement).innerText = classPrediction;
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Sortiva Live Waste Scanner</h1>
      <div id="webcam-container" className="border rounded p-2" />
      <div
        id="label-container"
        ref={labelContainerRef}
        className="mt-4 space-y-2 text-center"
      />
    </div>
  );
}
