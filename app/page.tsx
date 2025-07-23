import Link from "next/link";
import React from "react";
import { Mail, Phone } from "lucide-react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Who i'm", href: "/chi-sono" },

];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Michele Avino
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
        Welcome, discover my projects, or, if you prefer, contact me.</h2>
      </div>

      <footer className="text-zinc-400 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left space-y-1">
            <p className="text-zinc-200 font-semibold">Michele Avino</p>
            <p>P.IVA 06257910650</p>
            <p>via Capone 76, Scafati (SA) 84018, Italy</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row items-center gap-6">
            <a href="tel:+393394716560" className="flex items-center hover:text-white">
              <Phone size={20} className="mr-2" />
              +39 339 471 6560
            </a>
            <a href="mailto:michele.avino.2000@gmail.com" className="flex items-center hover:text-white">
              <Mail size={20} className="mr-2" />
              michele.avino.2000@gmail.com
            </a>
            <Link href="/privacy" className="hover:text-white">
              Privacy &amp; Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );

}
