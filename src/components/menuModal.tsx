import React from "react";

interface MenuModalProps {
  onClose: () => void;
}

export default function MenuModal({ onClose }: MenuModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 font-[family-name:var(--font-geist-sans)]"
      onClick={onClose}
    >
      <div
        className="bg-[#22262f] rounded-lg p-8 w-3/4 max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing modal
      >
        {/* <h2 className="text-lg font-semibold mb-4">Menu</h2> */}
        <ul className="space-y-6">
          <li className="cursor-pointer hover:text-blue-500 flex items-center w-full gap-4">Home <div className="w-full h-[1.5px] bg-gray-500 rounded-full " /></li>
          <li className="cursor-pointer hover:text-blue-500 flex items-center w-full gap-4">Experience <div className="w-full h-[1.5px] bg-gray-500 rounded-full " /></li>
          <li className="cursor-pointer hover:text-blue-500 flex items-center w-full gap-4">Projects <div className="w-full h-[1.5px] bg-gray-500 rounded-full " /></li>
          <li className="cursor-pointer hover:text-blue-500 flex items-center w-full gap-4">Skills <div className="w-full h-[1.5px] bg-gray-500 rounded-full " /></li>
        </ul>
      </div>
    </div>
  );
}
