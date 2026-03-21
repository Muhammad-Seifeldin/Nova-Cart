import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from "@/components/ui/sheet";
import ProductGrid from "@/components/product/ProductGrid";
import FilterSidebar from "@/components/filters/FilterSidebar";
import { useProducts } from "@/hooks/useProducts";
import { useFilterStore } from "@/store/filterStore";

export default function ShopPage() {
	const { products, isLoading, isError } = useProducts();
	const { searchQuery, setSearchQuery, resetFilters } = useFilterStore();
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
		>
			{/* Header */}
			<div className="flex flex-col gap-2 mb-8">
				<h1 className="text-3xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
					Shop
				</h1>
				<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
					{isLoading
						? "Loading products..."
						: `${products.length} products found`}
				</p>
			</div>

			{/* Search + Mobile Filter Toggle */}
			<div className="flex items-center gap-3 mb-6">
				<div className="relative flex-1 max-w-md">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280] dark:text-[#9CA3AF]" />
					<Input
						type="text"
						placeholder="Search products..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="pl-9 bg-[#F8F9FB] dark:bg-[#171923] border-[#E6E8EC] dark:border-[#2A2F3A] rounded-lg focus-visible:ring-[#5B6CFF]"
					/>
					{searchQuery && (
						<button
							type="button"
							onClick={() => setSearchQuery("")}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#F3F4F6]"
						>
							<X className="h-4 w-4" />
						</button>
					)}
				</div>

				{/* Mobile Filter Button */}
				<Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
					<SheetTrigger>
						<Button
							variant="outline"
							className="lg:hidden border-[#E6E8EC] dark:border-[#2A2F3A] text-[#1A1A1A] dark:text-[#F3F4F6] rounded-xl"
						>
							<SlidersHorizontal className="h-4 w-4 mr-2" />
							Filters
						</Button>
					</SheetTrigger>
					<SheetContent
						side="left"
						className="w-72 bg-white dark:bg-[#0F1115] border-r border-[#E6E8EC] dark:border-[#2A2F3A] overflow-y-auto"
					>
						<SheetTitle className="text-[#1A1A1A] dark:text-[#F3F4F6] mb-4">
							Filters
						</SheetTitle>
						<FilterSidebar />
					</SheetContent>
				</Sheet>

				{/* Reset Filters */}
				<Button
					variant="ghost"
					onClick={resetFilters}
					className="text-sm text-[#5B6CFF] dark:text-[#7C8CFF] hover:text-[#4A5AF0] rounded-xl"
				>
					Reset
				</Button>
			</div>

			{/* Layout */}
			<div className="flex gap-8">
				{/* Desktop Sidebar */}
				<aside className="hidden lg:block w-56 shrink-0">
					<FilterSidebar />
				</aside>

				{/* Product Grid */}
				<div className="flex-1 min-w-0">
					<ProductGrid
						products={products}
						isLoading={isLoading}
						isError={isError}
					/>
				</div>
			</div>
		</motion.div>
	);
}
