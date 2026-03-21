import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/product/ProductGrid";
import {
	useTrendingProducts,
	useBestSellers,
	useTopRated,
} from "@/hooks/useProducts";

function SectionHeader({
	title,
	subtitle,
}: {
	title: string;
	subtitle: string;
}) {
	return (
		<div className="flex items-end justify-between mb-6">
			<div>
				<h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
					{title}
				</h2>
				<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1">
					{subtitle}
				</p>
			</div>
			<Link
				to="/shop"
				className="flex items-center gap-1 text-sm font-medium text-[#5B6CFF] dark:text-[#7C8CFF] hover:text-[#4A5AF0] transition-colors"
			>
				View all
				<ArrowRight className="h-4 w-4" />
			</Link>
		</div>
	);
}

export default function HomePage() {
	const trending = useTrendingProducts();
	const bestSellers = useBestSellers();
	const topRated = useTopRated();

	return (
		<div className="flex flex-col">
			{/* Hero */}
			<section className="relative bg-[#F8F9FB] dark:bg-[#171923] border-b border-[#E6E8EC] dark:border-[#2A2F3A] overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, ease: "easeOut" }}
						className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto"
					>
						<span className="text-xs font-semibold tracking-widest text-[#5B6CFF] dark:text-[#7C8CFF] uppercase">
							New Season Arrivals
						</span>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6] leading-tight">
							Discover Your Next{" "}
							<span className="text-[#5B6CFF] dark:text-[#7C8CFF]">
								Favorite Product
							</span>
						</h1>
						<p className="text-base sm:text-lg text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
							Shop the latest trends across electronics, fashion, and jewelry.
							Quality products, minimal friction.
						</p>
						<motion.div whileTap={{ scale: 0.97 }}>
							<Button
								asChild
								size="lg"
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

				{/* Decorative background blur */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[#5B6CFF]/10 rounded-full blur-3xl pointer-events-none" />
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#5B6CFF]/5 rounded-full blur-3xl pointer-events-none" />
			</section>

			{/* Trending */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<SectionHeader
					title="Trending Now"
					subtitle="Top picks based on customer ratings"
				/>
				<ProductGrid
					products={trending.products}
					isLoading={trending.isLoading}
					isError={trending.isError}
				/>
			</section>

			{/* Best Sellers */}
			<section className="bg-[#F8F9FB] dark:bg-[#171923] py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						title="Best Sellers"
						subtitle="Most reviewed products by our customers"
					/>
					<ProductGrid
						products={bestSellers.products}
						isLoading={bestSellers.isLoading}
						isError={bestSellers.isError}
					/>
				</div>
			</section>

			{/* Top Rated */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<SectionHeader
					title="Top Rated"
					subtitle="Products with ratings of 4.5 and above"
				/>
				<ProductGrid
					products={topRated.products}
					isLoading={topRated.isLoading}
					isError={topRated.isError}
				/>
			</section>
		</div>
	);
}
