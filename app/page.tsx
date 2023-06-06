import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col gap-3 content-center justify-center items-center sm:flex-row sm:mt-20 py-8 md:py-10">
			<div className="inline-block">
				<h1 className={title({ fontWeight: 'bold' })}>Plan Smarter, Not Harder with&nbsp;</h1>
				<h1 className={title({ color: "gradient", size: 'lg', fontWeight: 'bold' })}>PLOKER/next</h1>
				<h4 className={subtitle({ class: "mt-4" })}>
					Take your Agile and Scrum development to the next level with our Planning Poker tool
				</h4>
				<div className="flex gap-3 py-5">
					<Button className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}>
						Start a game
					</Button>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>
			</div>
			<div className="w-full"></div>
		</section >
	);
}
