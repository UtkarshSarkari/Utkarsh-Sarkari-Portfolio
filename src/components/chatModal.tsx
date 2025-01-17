"use client";
import React from "react";

interface MenuModalProps {
  onClose: () => void;
}

export default function ChatModal({ onClose }: MenuModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 font-[family-name:var(--font-geist-sans)]"
      onClick={onClose}
    >
      <div
        className="bg-[#22262f] rounded-lg px-6 py-8 w-3/4 max-w-md shadow-lg flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <textarea
          className="w-full rounded-md resize-none bg-transparent border border-white/10 outline-none p-4 overflow-y-hidden"
          rows={8}
          placeholder="Start writing .&nbsp;.&nbsp;."
        />
        <button className="bg-white/5 hover:bg-white/10 rounded-md py-2 tracking-wide">Deliver</button>
      </div>
    </div>
  );
}
