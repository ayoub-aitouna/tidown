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

const handleDownload = async (url: string, extention: string) => {
  if (!url) return;
  const response = await fetch(
    `/api/download?videoUrl=${encodeURIComponent(url)}`
  );
  if (!response.ok) throw new Error("Failed to download video");
  const blob = await response.blob();
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `tidown-${new Date().getTime()}.${extention}`;
  link.click();
};

const Modal = ({ isOpen, onClose, videoData }: ModalProps) => {
  if (!isOpen) return null;

  const DownloadButton = ({
    title,
    extention,
    fileUrl,
  }: {
    title: string;
    extention: string;
    fileUrl: string;
  }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const handleclick = async () => {
      setLoading(true);
      try {
        await handleDownload(fileUrl, extention);
      } finally {
        setLoading(false);
      }
    };

    return (
      <button
        onClick={() => handleclick()}
        className="block mt-2 w-full text-center bg-crusta-400 text-white rounded p-2"
      >
        {loading ? (
          <>
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>{title}</>
        )}
      </button>
    );
    
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
            <DownloadButton
              title="Download Video"
              extention="mp4"
              fileUrl={videoData.videoUrl}
            />
          </div>
          <div>
            <h3 className="font-medium">Music</h3>
            <audio controls src={videoData.musicUrl} className="w-full"></audio>
            <DownloadButton
              title="Download Music"
              extention="mp3"
              fileUrl={videoData.musicUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
