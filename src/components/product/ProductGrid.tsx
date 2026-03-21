import { useState } from "react";
import { motion } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import type { Product } from "@/types";

interface ProductGridProps {
	products: Product[];
	isLoading: boolean;
	isError: boolean;
}

export default function ProductGrid({
	products,
	isLoading,
	isError,
}: ProductGridProps) {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	if (isError) {
		return (
			<div className="flex flex-col items-center justify-center py-24 gap-4">
				<p className="text-lg font-medium text-[#1A1A1A] dark:text-[#F3F4F6]">
					Something went wrong
				</p>
				<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
					Failed to load products. Please try again later.
				</p>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{Array.from({ length: 8 }).map((_, i) => (
					<div
						key={i}
						className="bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-2xl p-3"
					>
						<Skeleton className="aspect-square rounded-xl mb-3" />
						<Skeleton className="h-3 w-1/3 mb-2" />
						<Skeleton className="h-4 w-full mb-1" />
						<Skeleton className="h-4 w-2/3 mb-2" />
						<Skeleton className="h-3 w-1/4 mb-2" />
						<Skeleton className="h-9 w-full rounded-xl" />
					</div>
				))}
			</div>
		);
	}

	if (products.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-24 gap-4">
				<p className="text-lg font-medium text-[#1A1A1A] dark:text-[#F3F4F6]">
					No products found
				</p>
				<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
					Try adjusting your filters or search query.
				</p>
			</div>
		);
	}

	return (
		<>
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {},
					visible: {
						transition: {
							staggerChildren: 0.05,
						},
					},
				}}
			>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onQuickView={setSelectedProduct}
					/>
				))}
			</motion.div>

			<ProductModal
				product={selectedProduct}
				onClose={() => setSelectedProduct(null)}
			/>
		</>
	);
}
