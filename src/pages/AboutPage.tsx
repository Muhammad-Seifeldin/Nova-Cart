import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
		>
			{/* Logo Mark */}
			<div className="flex flex-col items-center gap-6 mb-16">
				<div className="bg-[#5B6CFF] dark:bg-[#7C8CFF] rounded-2xl w-20 h-20 flex items-center justify-center">
					<span className="text-white text-3xl font-bold">N</span>
				</div>
				<div className="text-center">
					<h1 className="text-3xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
						Nova<span className="text-[#5B6CFF] dark:text-[#7C8CFF]">Cart</span>
					</h1>
					<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1">
						Modern shopping, minimal friction.
					</p>
				</div>
			</div>

			<Separator className="bg-[#E6E8EC] dark:bg-[#2A2F3A] mb-16" />

			{/* Mission */}
			<div className="flex flex-col gap-12">
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
					className="flex flex-col gap-4"
				>
					<h2 className="text-xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
						Our Mission
					</h2>
					<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
						NovaCart was built with one goal in mind — to make online shopping
						feel effortless. We believe that finding and buying products you
						love should be fast, intuitive, and enjoyable. No clutter, no
						confusion, just great products at your fingertips.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.25, ease: "easeOut", delay: 0.1 }}
					className="flex flex-col gap-4"
				>
					<h2 className="text-xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
						What We Offer
					</h2>
					<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
						From cutting-edge electronics to timeless jewelry and everyday
						fashion, NovaCart curates a wide range of products to suit every
						taste and budget. Every item is carefully selected to ensure quality
						and value for our customers.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.25, ease: "easeOut", delay: 0.15 }}
					className="flex flex-col gap-4"
				>
					<h2 className="text-xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
						Our Values
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						{[
							{
								title: "Simplicity",
								desc: "Clean design that puts products first and gets out of the way.",
							},
							{
								title: "Quality",
								desc: "Every product is chosen with care for lasting value.",
							},
							{
								title: "Trust",
								desc: "Transparent pricing, honest reviews, and reliable service.",
							},
						].map((value) => (
							<div
								key={value.title}
								className="bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-2xl p-5 flex flex-col gap-2"
							>
								<h3 className="text-sm font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
									{value.title}
								</h3>
								<p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
									{value.desc}
								</p>
							</div>
						))}
					</div>
				</motion.div>

				<Separator className="bg-[#E6E8EC] dark:bg-[#2A2F3A]" />

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.25, ease: "easeOut", delay: 0.2 }}
					className="flex flex-col items-center gap-4 text-center"
				>
					<h2 className="text-xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
						Ready to start shopping?
					</h2>
					<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
						Explore our full catalog and find your next favorite product.
					</p>
					<motion.div whileTap={{ scale: 0.97 }}>
						<Button
							asChild
							className="bg-[#5B6CFF] hover:bg-[#4A5AF0] text-white rounded-xl px-8 transition-colors"
						>
							<Link to="/shop">
								Shop Now
								<ArrowRight className="h-4 w-4 ml-2" />
							</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
}
