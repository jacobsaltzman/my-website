"use client";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";
import ContactForm from "./ContactForm";
import GeoButton from "./GeoButton";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 py-4 md:px-6 md:py-6 overflow-hidden" aria-label="Main">
      <button
        type="button"
        className="block p-2 text-lg text-white border-2 hover:border-slate-800 hover:text-slate-800"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        GET IN TOUCH
        <span className="sr-only"> Open Menu</span>
      </button>

      {/* Contact Form  -- add these for a non-full-bleed modal -- glass-container rounded-lg md:rounded-xl */}
      <div
        className={clsx(
          "gap-4 fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-center bg-gradient-to-b from-slate-800 to-slate-900 p-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none",
          open ? "translate-y-0" : "translate-y-[200%]",
        )}
      >
        <button
          type="button"
          className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white"
          aria-expanded={open}
          onClick={() => setOpen(false)}
        >
          <MdClose />
          <span className="sr-only">Close menu</span>
        </button>
        <ContactForm />
        <GeoButton></GeoButton>
      </div>

     
    </div>
  );
}
