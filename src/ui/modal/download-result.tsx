"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";

type data = {
  videoUrl: string;
  musicUrl: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoData: data;
};

const Modal = ({ isOpen, onClose, videoData }: ModalProps) => {
  const [error, setError] = useState("");
  if (!isOpen) return null;
  const handleDownload = async (url: string, extention: string) => {
    if (!url) {
      setError("Please enter a valid TikTok URL");
      return;
    }

    setError("");

    try {
      const response = await fetch(
        `/api/download?videoUrl=${encodeURIComponent(url)}`
      );
      if (!response.ok) {
        throw new Error("Failed to download video");
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);

      link.download = `tidown-${new Date().getTime()}.${extention}`;
      console.log('here')
      link.click();
    } catch (error) {
      console.log('here', error)

      setError("Failed to download video");
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black-950">
      <div className="bg-white rounded-lg p-4 max-w-md w-full">
        <div className="flex flex-row">
          <h2 className="text-xl flex-1 font-bold ">Download Options</h2>
          <button onClick={onClose} className=" text-xl ">
            ×
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-medium">Video</h3>
            <video
              controls
              src={videoData.videoUrl}
              muted
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              className="w-full max-h-96"
            ></video>
            <button
              onClick={() => handleDownload(videoData.videoUrl, "mp4")}
              className="block mt-2 w-full text-center bg-crusta-400 text-white rounded p-2"
            >
              Download Video
            </button>
          </div>
          <div>
            <h3 className="font-medium">Music</h3>
            <audio controls src={videoData.musicUrl} className="w-full"></audio>
            <button
              onClick={() => handleDownload(videoData.musicUrl, "mp3")}
              className="block mt-2 w-full text-center bg-crusta-400 text-white rounded p-2"
            >
              Download Music
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
