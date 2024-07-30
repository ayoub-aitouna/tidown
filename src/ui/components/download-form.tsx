"use client";
import React, { useCallback, useState } from "react";
import Modal from "@/ui/modal/download-result";
type data = {
  videoUrl: string;
  musicUrl: string;
};
const DownloadForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoData, setVideoData] = useState<data>({
    videoUrl: "",
    musicUrl: "",
  });

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    const value = e.target[0].value;
    if (!value) return;
    const res = await fetch(`/api/getInfo?shareURL=${value}`);
    const data = await res.json();
    setVideoData({ videoUrl: data.play, musicUrl: data.music });
    setModalOpen(true);
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl p-2 w-full max-w-[700px] md:h-16 outline outline-white outline-1  text-black-950 flex flex-col md:flex-row justify-center items-center gap-2 px-4"
      >
        <input
          type="text"
          className="flex-1 h-16 md:h-full bg-transparent outline-none  text-white rounded-xl"
          placeholder="Copy TikTok video link"
        />
        <button
          className="rounded p-2 w-full md:w-32 h-9 bg-crusta-400 text-white grid place-content-center"
          type="submit"
        >
          Download
        </button>
      </form>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoData={videoData}
      />
    </>
  );
};

export default DownloadForm;
