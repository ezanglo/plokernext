import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col gap-3 content-center justify-center items-center sm:mt-20 py-8 md:py-10">
			<div className={title({ size: 'lg' })}>Plan Smarter, Not Harder</div>
			<div>
				<span className={subtitle()}>
					Ploker/next is an open source Planning Poker tool for Agile and Scrum Development.
				</span>
			</div>
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
			<div className="w-full"></div>
		</section >
	);
}
