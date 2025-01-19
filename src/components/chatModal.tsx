"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import animationData from "../../public/icons/loader.json";

interface MenuModalProps {
  onClose: () => void;
}

export default function ChatModal({ onClose }: MenuModalProps) {
  const form = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_45ts361",
        "template_z8x4qop",
        form.current,
        "-lRFTybIfYy1H3cy8"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          setIsLoading(false);
          setTimeout(() => {
            setSuccess(false);
            setIsSubmitting(false);
            if (form.current) {
              form.current.reset();
            }
          }, 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsSubmitting(false);
          setIsLoading(false);
        }
      );
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 font-[family-name:var(--font-geist-sans)]"
      onClick={onClose}
    >
      <div
        className="bg-[#22262f] rounded-lg px-6 py-8 w-3/4 max-w-[480px] shadow-lg flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="text-sm flex flex-col gap-4"
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                name="user_name"
                placeholder="John Doe"
                className="bg-transparent border border-white/10 p-2 rounded-md outline-none text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                name="user_email"
                placeholder="johndoe@example.com"
                className="bg-transparent border border-white/10 p-2 rounded-md outline-none text-sm"
              />
            </div>
          </div>
          {isLoading ? (
            <Lottie className="h-[194px]" animationData={animationData} />
          ) : (
            <textarea
              name="message"
              className="w-full rounded-md resize-none bg-transparent border border-white/10 outline-none p-4 overflow-y-hidden text-sm"
              rows={8}
              placeholder="Your message goes here .&nbsp;.&nbsp;."
              required
            ></textarea>
          )}
          <button
            type="submit"
            className="bg-white/5 hover:bg-white/10 rounded-md py-2 tracking-wide"
            disabled={success || isSubmitting}
          >
            {success ? "Thanks ✅" : "Get In Touch"}
          </button>
        </form>
      </div>
    </div>
  );
}
