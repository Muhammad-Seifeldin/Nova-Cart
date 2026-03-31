import { useFilterStore } from "@/store/filterStore";
import { useCategories } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FilterSidebar() {
	const {
		category,
		minPrice,
		maxPrice,
		minRating,
		setCategory,
		setMinPrice,
		setMaxPrice,
		setMinRating,
		resetFilters,
	} = useFilterStore();

	const { data: categories = [] } = useCategories();

	return (
		<aside className="flex flex-col gap-6 bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-2xl p-5 h-fit">
			{/* Header */}
			<div className="flex items-center justify-between">
				<h3 className="text-sm font-semibold text-[#1A1A1A] dark:text-[#F3F4F6]">
					Filters
				</h3>
				<Button
					variant="ghost"
					size="sm"
					onClick={resetFilters}
					className="text-xs text-[#5B6CFF] dark:text-[#7C8CFF] hover:text-[#4A5AF0] h-auto p-0"
				>
					Reset all
				</Button>
			</div>

			<Separator className="bg-[#E6E8EC] dark:bg-[#2A2F3A]" />

			{/* Category */}
			<div className="flex flex-col gap-3">
				<h4 className="text-xs font-semibold text-[#1A1A1A] dark:text-[#F3F4F6] uppercase tracking-wide">
					Category
				</h4>
				<div className="flex flex-col gap-1">
					<button
						type="button"
						onClick={() => setCategory("")}
						className={cn(
							"text-sm text-left px-3 py-2 rounded-lg transition-colors capitalize",
							category === ""
								? "bg-[#5B6CFF] text-white"
								: "text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#E6E8EC] dark:hover:bg-[#2A2F3A]",
						)}
					>
						All
					</button>
					{categories.map((cat) => (
						<button
							type="button"
							key={cat}
							onClick={() => setCategory(cat)}
							className={cn(
								"text-sm text-left px-3 py-2 rounded-lg transition-colors capitalize",
								category === cat
									? "bg-[#5B6CFF] text-white"
									: "text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#E6E8EC] dark:hover:bg-[#2A2F3A]",
							)}
						>
							{cat.replace(/-/g, " ")}
						</button>
					))}
				</div>
			</div>

			<Separator className="bg-[#E6E8EC] dark:bg-[#2A2F3A]" />

			{/* Price Range */}
			<div className="flex flex-col gap-3">
				<h4 className="text-xs font-semibold text-[#1A1A1A] dark:text-[#F3F4F6] uppercase tracking-wide">
					Price Range
				</h4>
				<div className="flex flex-col gap-3">
					<div className="flex items-center justify-between text-xs text-[#6B7280] dark:text-[#9CA3AF]">
						<span>${minPrice}</span>
						<span>${maxPrice}</span>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="min-price"
							className="text-xs text-[#6B7280] dark:text-[#9CA3AF]"
						>
							Min: ${minPrice}
						</label>
						<input
							id="min-price"
							type="range"
							min={0}
							max={10000}
							step={50}
							value={minPrice}
							onChange={(e) => setMinPrice(Number(e.target.value))}
							className="w-full accent-[#5B6CFF]"
						/>
						<label
							htmlFor="max-price"
							className="text-xs text-[#6B7280] dark:text-[#9CA3AF]"
						>
							Max: ${maxPrice}
						</label>
						<input
							id="max-price"
							type="range"
							min={0}
							max={10000}
							step={50}
							value={maxPrice}
							onChange={(e) => setMaxPrice(Number(e.target.value))}
							className="w-full accent-[#5B6CFF]"
						/>
					</div>
				</div>
			</div>

			<Separator className="bg-[#E6E8EC] dark:bg-[#2A2F3A]" />

			{/* Rating */}
			<div className="flex flex-col gap-3">
				<h4 className="text-xs font-semibold text-[#1A1A1A] dark:text-[#F3F4F6] uppercase tracking-wide">
					Minimum Rating
				</h4>
				<div className="flex flex-col gap-1">
					{[0, 1, 2, 3, 4].map((rating) => (
						<button
							type="button"
							key={rating}
							onClick={() => setMinRating(rating)}
							className={cn(
								"flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm",
								minRating === rating
									? "bg-[#5B6CFF] text-white"
									: "text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#E6E8EC] dark:hover:bg-[#2A2F3A]",
							)}
						>
							{rating === 0 ? (
								<span>All ratings</span>
							) : (
								<div className="flex items-center gap-1">
									{[1, 2, 3, 4, 5].slice(0, rating).map((star) => (
										<Star
											key={star}
											className={cn(
												"h-3.5 w-3.5",
												minRating === rating
													? "fill-white text-white"
													: "fill-[#FACC15] text-[#FACC15]",
											)}
										/>
									))}
									<span className="ml-1">& up</span>
								</div>
							)}
						</button>
					))}
				</div>
			</div>
		</aside>
	);
}
