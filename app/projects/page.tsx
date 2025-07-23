import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye } from "lucide-react";
import { Mail, Phone } from "lucide-react";

// Manually mocked view counts. Update these values as needed.
type ViewsMap = Record<string, number>;
const views: ViewsMap = {
  dashn: 120,
  f1_fast_lap: 85,
  heavent: 200,
  mase: 150,
  // Add other project slugs here:
};

// Manually mocked project data. Update or add projects as needed.
type Project = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  published: boolean;
};
const projects: Project[] = [
  {
    slug: "heavent",
    title: "Heavent",
    description: "A platform for something great.",
    date: "2025-06-15",
    published: true,
  },
  {
    slug: "dashn",
    title: "Dashn",
    description: "Dashboard analytics tool.",
    date: "2025-05-10",
    published: true,
  },
  {
    slug: "mase",
    title: "MASE",
    description: "A music streaming plugin.",
    date: "2025-04-20",
    published: true,
  },
  {
    slug: "f1_fast_lap",
    title: "F1 Fast Lap",
    description: "Timing and telemetry app.",
    date: "2025-03-30",
    published: true,
  },
  // Add more mock projects below
];

export default function ProjectsPage() {
  // Featured project
  const featured = projects.find((p) => p.slug === "heavent")!;
  // Top projects
  const top2 = projects.find((p) => p.slug === "dashn")!;
  const top3 = projects.find((p) => p.slug === "mase")!;

  // Filter and sort remaining projects
  const sorted = projects
    .filter((p) => p.published)
    .filter((p) => p.slug !== featured.slug && p.slug !== top2.slug && p.slug !== top3.slug)
    .sort((a, b) => new Date(b.date ?? "").getTime() - new Date(a.date ?? "").getTime());

  return (
    <div className="relative">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2"> 
          <Card>
            <Link href={`/projects/${featured.slug}`}> 
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                          new Date(featured.date)
                        )}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{' '}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0
                    )}
                  </span>
                </div>

                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">→</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <article className="p-4">
                  <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
                  <p className="text-zinc-400">{project.description}</p>
                  <span className="flex items-center gap-1 text-xs text-zinc-500 mt-1">
                    <Eye className="w-4 h-4" /> {views[project.slug] ?? 0}
                  </span>
                </article>
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {sorted.map((project) => (
            <Card key={project.slug}>
              <article className="p-4">
                <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
                <p className="text-zinc-400">{project.description}</p>
                <span className="flex items-center gap-1 text-xs text-zinc-500 mt-1">
                  <Eye className="w-4 h-4" /> {views[project.slug] ?? 0}
                </span>
              </article>
            </Card>
          ))}
        </div>
      </div>
      <footer className="bg-zinc-900 text-zinc-400 py-8 mt-8">
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