import { useNavigate } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";
import { formatPrice, truncate } from "@/lib/utils";
import { toast } from "sonner";
import type { Product } from "@/types";

interface ProductModalProps {
	product: Product | null;
	onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
	const navigate = useNavigate();
	const addItem = useCartStore((state) => state.addItem);

	if (!product) return null;

	function handleAddToCart() {
		if (!product) return;
		addItem(product);
		toast.success(`${truncate(product.title, 30)} added to cart`);
	}

	function handleViewFull() {
		if (!product) return;
		onClose();
		navigate(`/product/${product.id}`);
	}

	return (
		<Dialog open={!!product} onOpenChange={onClose}>
			<DialogContent className="max-w-[95vw] sm:max-w-2xl bg-white dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-2xl p-0 overflow-hidden">
				<DialogTitle className="sr-only">{product.title}</DialogTitle>

				<motion.div
					initial={{ opacity: 0, scale: 0.97 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className="grid grid-cols-1 sm:grid-cols-2"
				>
					{/* Image */}
					<div className="bg-[#F8F9FB] dark:bg-[#0F1115] flex items-center justify-center p-8 min-h-[260px]">
						<img
							src={product.thumbnail}
							alt={product.title}
							className="max-h-52 w-full object-contain"
						/>
					</div>

					{/* Details */}
					<div className="flex flex-col gap-4 p-6">
						{/* Category */}
						<span className="text-xs text-[#6B7280] dark:text-[#9CA3AF] capitalize">
							{product.category}
						</span>

						{/* Title */}
						<h2 className="text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6] line-clamp-3">
							{product.title}
						</h2>

						{/* Rating */}
						<div className="flex items-center gap-1">
							{[1, 2, 3, 4, 5].map((star) => (
								<Star
									key={star}
									className={`h-4 w-4 ${
										star <= Math.round(product.rating)
											? "fill-[#FACC15] text-[#FACC15]"
											: "text-[#E6E8EC] dark:text-[#2A2F3A]"
									}`}
								/>
							))}
							<span className="text-xs text-[#6B7280] dark:text-[#9CA3AF] ml-1">
								({product.reviews.length} reviews)
							</span>
						</div>

						{/* Price */}
						<div className="flex items-center gap-2">
							<span className="text-2xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
								{formatPrice(product.price)}
							</span>
							<Badge className="bg-[#22C55E]/10 text-[#22C55E] border-0 rounded-full text-xs">
								{product.availabilityStatus}
							</Badge>
						</div>

						{/* Description */}
						<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] line-clamp-3 leading-relaxed">
							{product.description}
						</p>

						{/* Actions */}
						<div className="flex flex-col gap-2 mt-auto">
							<motion.div whileTap={{ scale: 0.97 }}>
								<Button
									onClick={handleAddToCart}
									className="w-full bg-[#5B6CFF] hover:bg-[#4A5AF0] text-white rounded-xl transition-colors"
								>
									<ShoppingCart className="h-4 w-4 mr-2" />
									Add to Cart
								</Button>
							</motion.div>
							<Button
								onClick={handleViewFull}
								variant="outline"
								className="w-full rounded-xl border-[#E6E8EC] dark:border-[#2A2F3A] text-[#1A1A1A] dark:text-[#F3F4F6] hover:bg-[#F8F9FB] dark:hover:bg-[#0F1115] transition-colors"
							>
								View Full Details
							</Button>
						</div>
					</div>
				</motion.div>
			</DialogContent>
		</Dialog>
	);
}
