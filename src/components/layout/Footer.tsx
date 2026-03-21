import { Link } from "react-router-dom";
import { Github, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
	return (
		<footer className="bg-[#F8F9FB] dark:bg-[#171923] border-t border-[#E6E8EC] dark:border-[#2A2F3A] mt-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
					{/* Brand */}
					<div className="flex flex-col gap-4">
						<h3 className="text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
							Nova
							<span className="text-[#5B6CFF] dark:text-[#7C8CFF]">Cart</span>
						</h3>
						<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
							Discover your next favorite product. Modern shopping, minimal
							friction.
						</p>
						<div className="flex items-center gap-3">
							<a
								href="https://github.com"
								target="_blank"
								rel="noreferrer"
								className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#5B6CFF] dark:hover:text-[#7C8CFF] transition-colors"
							>
								<Github className="h-5 w-5" />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noreferrer"
								className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#5B6CFF] dark:hover:text-[#7C8CFF] transition-colors"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noreferrer"
								className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#5B6CFF] dark:hover:text-[#7C8CFF] transition-colors"
							>
								<Instagram className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className="flex flex-col gap-4">
						<h4 className="text-sm font-semibold text-[#1A1A1A] dark:text-[#F3F4F6]">
							Quick Links
						</h4>
						<nav className="flex flex-col gap-2">
							{[
								{ label: "Shop", to: "/shop" },
								{ label: "About", to: "/about" },
								{ label: "Contact", to: "/contact" },
								{ label: "Cart", to: "/cart" },
							].map((link) => (
								<Link
									key={link.label}
									to={link.to}
									className="text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#5B6CFF] dark:hover:text-[#7C8CFF] transition-colors w-fit"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Categories */}
					<div className="flex flex-col gap-4">
						<h4 className="text-sm font-semibold text-[#1A1A1A] dark:text-[#F3F4F6]">
							Categories
						</h4>
						<nav className="flex flex-col gap-2">
							{[
								"electronics",
								"jewelery",
								"men's clothing",
								"women's clothing",
							].map((cat) => (
								<Link
									key={cat}
									to={`/shop`}
									className="text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#5B6CFF] dark:hover:text-[#7C8CFF] transition-colors capitalize w-fit"
								>
									{cat}
								</Link>
							))}
						</nav>
					</div>

					{/* Newsletter */}
					<div className="flex flex-col gap-4">
						<h4 className="text-sm font-semibold text-[#1A1A1A] dark:text-[#F3F4F6]">
							Newsletter
						</h4>
						<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
							Get the latest deals and updates.
						</p>
						<form
							onSubmit={(e) => e.preventDefault()}
							className="flex flex-col gap-2"
						>
							<Input
								type="email"
								placeholder="your@email.com"
								className="bg-[#F8F9FB] dark:bg-[#171923] border-[#E6E8EC] dark:border-[#2A2F3A] rounded-lg focus-visible:ring-[#5B6CFF]"
							/>
							<Button
								type="submit"
								className="bg-[#5B6CFF] hover:bg-[#4A5AF0] text-white rounded-xl transition-colors"
							>
								Subscribe
							</Button>
						</form>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-6 border-t border-[#E6E8EC] dark:border-[#2A2F3A] flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
						© {new Date().getFullYear()} NovaCart. All rights reserved.
					</p>
					<p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
						Built with React + TypeScript
					</p>
				</div>
			</div>
		</footer>
	);
}
