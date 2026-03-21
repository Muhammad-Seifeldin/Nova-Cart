import { useNavigate } from "react-router-dom";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";
import type { Product } from "@/types";

interface ProductDetailProps {
	product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
	const navigate = useNavigate();
	const addItem = useCartStore((state) => state.addItem);

	function handleAddToCart() {
		addItem(product);
		toast.success("Added to cart");
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
		>
			{/* Back Button */}
			<Button
				variant="ghost"
				onClick={() => navigate(-1)}
				className="mb-6 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#F3F4F6] rounded-xl -ml-2"
			>
				<ArrowLeft className="h-4 w-4 mr-2" />
				Back
			</Button>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Left: Image */}
				<motion.div
					initial={{ opacity: 0, x: -16 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className="bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-2xl flex items-center justify-center p-12 min-h-[400px]"
				>
					<img
						src={product.image}
						alt={product.title}
						className="max-h-80 w-full object-contain"
					/>
				</motion.div>

				{/* Right: Details */}
				<motion.div
					initial={{ opacity: 0, x: 16 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
					className="flex flex-col gap-6"
				>
					{/* Category */}
					<span className="text-sm text-[#6B7280] dark:text-[#9CA3AF] capitalize">
						{product.category}
					</span>

					{/* Title */}
					<h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6] leading-tight">
						{product.title}
					</h1>

					{/* Rating */}
					<div className="flex items-center gap-2">
						<div className="flex items-center gap-1">
							{[1, 2, 3, 4, 5].map((star) => (
								<Star
									key={star}
									className={`h-5 w-5 ${
										star <= Math.round(product.rating.rate)
											? "fill-[#FACC15] text-[#FACC15]"
											: "text-[#E6E8EC] dark:text-[#2A2F3A]"
									}`}
								/>
							))}
						</div>
						<span className="text-sm font-medium text-[#1A1A1A] dark:text-[#F3F4F6]">
							{product.rating.rate}
						</span>
						<span className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
							({product.rating.count} reviews)
						</span>
					</div>

					<Separator className="bg-[#E6E8EC] dark:bg-[#2A2F3A]" />

					{/* Price */}
					<div className="flex items-center gap-3">
						<span className="text-3xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
							{formatPrice(product.price)}
						</span>
						<Badge className="bg-[#22C55E]/10 text-[#22C55E] border-0 rounded-full">
							In Stock
						</Badge>
					</div>

					{/* Description */}
					<div className="flex flex-col gap-2">
						<h3 className="text-sm font-semibold text-[#1A1A1A] dark:text-[#F3F4F6]">
							Description
						</h3>
						<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
							{product.description}
						</p>
					</div>

					<Separator className="bg-[#E6E8EC] dark:bg-[#2A2F3A]" />

					{/* Add to Cart */}
					<motion.div whileTap={{ scale: 0.97 }}>
						<Button
							onClick={handleAddToCart}
							size="lg"
							className="w-full bg-[#5B6CFF] hover:bg-[#4A5AF0] text-white rounded-xl transition-colors"
						>
							<ShoppingCart className="h-5 w-5 mr-2" />
							Add to Cart
						</Button>
					</motion.div>

					{/* Meta */}
					<div className="flex flex-col gap-1 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
						<span>Free shipping on orders over $50</span>
						<span>30-day return policy</span>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}
