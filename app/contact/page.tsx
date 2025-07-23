"use client";
import { Github, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Phone size={20} />,
		href: "",
		label: "Customer Support",
		handle: "+393384716560",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:michele.avino.2000@gmail.com",
		label: "Support Email",
		handle: "michele.avino.2000@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/Michele030500",
		label: "Github",
		handle: "Michele030500",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-md font-medium duration-150 xl:text-md text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
			<footer className="bg-zinc-900 text-zinc-400 py-8">
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
