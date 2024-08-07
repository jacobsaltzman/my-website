import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Contact from "./Contact";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className="">
      <div className="flex flex-col items-center justify-between border-t border-slate-600 px-8 py-7 md:flex-row bg-black">
        
        <Link href={"/"}>
          <Logo />
          <span className="sr-only">saltzman.dev logo link to homepage</span>
        </Link>

        
       
          <ul className="flex gap-10">
            {settings.data.navigation.map((item) => (
              <li key={item.label}>
                <PrismicNextLink className="inline-flex min-h-11 items-center" field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
            <Contact />
        
      </div>
    </footer>
  );
}
