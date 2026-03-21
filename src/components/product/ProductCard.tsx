import { memo } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";
import { formatPrice, truncate } from "@/lib/utils";
import { toast } from "sonner";
import type { Product } from "@/types";

interface ProductCardProps {
	product: Product;
	onQuickView: (product: Product) => void;
}

const ProductCard = memo(function ProductCard({
	product,
	onQuickView,
}: ProductCardProps) {
	const addItem = useCartStore((state) => state.addItem);

	const discount = product.rating.count > 300 ? 10 : null;

	function handleAddToCart(e: React.MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		addItem(product);
		toast.success(`${truncate(product.title, 30)} added to cart`);
	}

	function handleQuickView(e: React.MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		onQuickView(product);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{ scale: 1.02, y: -2 }}
			transition={{ duration: 0.2, ease: "easeOut" }}
			className="group relative bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
			onClick={handleQuickView}
		>
			{/* Discount Badge */}
			{discount && (
				<div className="absolute top-3 left-3 z-10">
					<Badge className="bg-[#EF4444] dark:bg-[#F87171] text-white text-xs px-2 py-1 rounded-full border-0">
						-{discount}%
					</Badge>
				</div>
			)}

			{/* Image */}
			<div className="relative aspect-square rounded-xl overflow-hidden bg-white dark:bg-[#0F1115] mb-3">
				<img
					src={product.image}
					alt={product.title}
					className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
				/>
			</div>

			{/* Content */}
			<div className="flex flex-col gap-2 flex-1">
				{/* Category */}
				<span className="text-xs text-[#6B7280] dark:text-[#9CA3AF] capitalize">
					{product.category}
				</span>

				{/* Title — always reserves 2 lines */}
				<Link
					to={`/product/${product.id}`}
					onClick={(e) => e.stopPropagation()}
					className="text-sm font-medium text-[#1A1A1A] dark:text-[#F3F4F6] line-clamp-2 min-h-10 hover:text-[#5B6CFF] dark:hover:text-[#7C8CFF] transition-colors"
				>
					{product.title}
				</Link>

				{/* Rating */}
				<div className="flex items-center gap-1">
					<Star className="h-3.5 w-3.5 fill-[#FACC15] text-[#FACC15]" />
					<span className="text-xs font-medium text-[#1A1A1A] dark:text-[#F3F4F6]">
						{product.rating.rate}
					</span>
					<span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
						({product.rating.count})
					</span>
				</div>

				{/* Price */}
				<div className="flex items-center gap-2">
					<span className="text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
						{formatPrice(product.price)}
					</span>
					{discount && (
						<span className="text-xs text-[#6B7280] dark:text-[#9CA3AF] line-through">
							{formatPrice(product.price * (1 + discount / 100))}
						</span>
					)}
				</div>

				{/* Add to Cart — always at bottom */}
				<div className="mt-auto pt-1">
					<motion.div whileTap={{ scale: 0.97 }}>
						<Button
							onClick={handleAddToCart}
							className="w-full bg-[#5B6CFF] hover:bg-[#4A5AF0] text-white rounded-xl px-4 py-2 transition-colors text-sm"
						>
							<ShoppingCart className="h-4 w-4 mr-2" />
							Add to Cart
						</Button>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
});

export default ProductCard;
