"use client";
import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Mail, Phone, Github } from "lucide-react";

const profile = {
  name: "Michele Avino",
  role: "Freelance Developer & Technology Consultant",
  vat: "06257910650",
  address: "via Capone 76, Scafati (SA) 84018, Italy",
  email: "michele.avino.2000@gmail.com",
  phone: "+39 338 471 6560",
  github: "https://github.com/Michele030500",
};

export default function About() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zinc-100 text-center mb-12 font-display">
          About Me
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Profile Card */}
          <Card>
            <div className="p-6 flex flex-col items-center text-zinc-200">
              <h2 className="text-2xl font-semibold mb-2 font-display">
                {profile.name}
              </h2>
              <p className="text-zinc-400 mb-4 text-center">
                {profile.role}
              </p>
              <div className="space-y-1 text-sm text-zinc-300">
                <p><strong>VAT:</strong> {profile.vat}</p>
                <p><strong>Address:</strong> {profile.address}</p>
              </div>
            </div>
          </Card>

          {/* Bio Card */}
          <Card>
            <div className="p-6 text-zinc-200 space-y-4">
              <h3 className="text-xl font-semibold mb-2 font-display">
                Bio
              </h3>
              <p>
                I’m Michele, a freelance developer specializing in building scalable web applications and implementing AI-driven solutions. With over 5 years of experience collaborating with SMEs, I help businesses modernize processes, improve efficiency,
                and drive growth through strategic use of technology.
              </p>
              <p>
                My expertise spans full-stack development, from crafting intuitive user interfaces using React and Next.js to designing robust back-end services. I am passionate about delivering clean, maintainable code and fostering strong client relationships.
              </p>
            </div>
          </Card>

          {/* Skills Card */}
          <Card>
            <div className="p-6 text-zinc-200">
              <h3 className="text-xl font-semibold mb-2 font-display">
                Skills & Tools
              </h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>Python / AI & ML integration</li>
                <li>Tailwind CSS / UI Design</li>
                <li>Docker / DevOps</li>
              </ul>
            </div>
          </Card>

          {/* Contact Card */}
          <Card>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-zinc-200 mb-2 font-display">
                Get in Touch
              </h3>
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone size={20} />
                <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="hover:text-zinc-100">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Mail size={20} />
                <a href={`mailto:${profile.email}`} className="hover:text-zinc-100">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Github size={20} />
                <a href={profile.github} target="_blank" className="hover:text-zinc-100">
                  GitHub Profile
                </a>
              </div>
              <Link href="/privacy">
                <a className="text-sm text-zinc-500 hover:text-zinc-300">
                  Privacy & Policy
                </a>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
