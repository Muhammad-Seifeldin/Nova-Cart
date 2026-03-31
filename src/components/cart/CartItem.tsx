import { memo } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { formatPrice, truncate } from "@/lib/utils";
import { toast } from "sonner";
import type { CartItem as CartItemType } from "@/types";

interface CartItemProps {
	item: CartItemType;
}

const CartItem = memo(function CartItem({ item }: CartItemProps) {
	const { increaseQuantity, decreaseQuantity, removeItem } = useCartStore();

	function handleRemove() {
		removeItem(item.product.id);
		toast.success(`${truncate(item.product.title, 30)} removed from cart`);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -8 }}
			transition={{ duration: 0.2, ease: "easeOut" }}
			className="flex gap-4 bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-2xl p-4"
		>
			{/* Image */}
			<Link
				to={`/product/${item.product.id}`}
				className="shrink-0 bg-white dark:bg-[#0F1115] rounded-xl overflow-hidden w-24 h-24 flex items-center justify-center p-2"
			>
				<img
					src={item.product.thumbnail}
					alt={item.product.title}
					className="w-full h-full object-contain"
				/>
			</Link>

			{/* Details */}
			<div className="flex flex-col gap-2 flex-1 min-w-0">
				<Link
					to={`/product/${item.product.id}`}
					className="text-sm font-medium text-[#1A1A1A] dark:text-[#F3F4F6] line-clamp-2 hover:text-[#5B6CFF] dark:hover:text-[#7C8CFF] transition-colors"
				>
					{item.product.title}
				</Link>

				<span className="text-xs text-[#6B7280] dark:text-[#9CA3AF] capitalize">
					{item.product.category}
				</span>

				<span className="text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
					{formatPrice(item.product.price * item.quantity)}
				</span>
			</div>

			{/* Quantity + Remove */}
			<div className="flex flex-col items-end justify-between shrink-0">
				{/* Remove */}
				<Button
					variant="ghost"
					size="icon"
					onClick={handleRemove}
					className="h-8 w-8 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#EF4444] dark:hover:text-[#F87171] rounded-lg"
				>
					<Trash2 className="h-4 w-4" />
				</Button>

				{/* Quantity Controls */}
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="icon"
						onClick={() => decreaseQuantity(item.product.id)}
						className="h-7 w-7 rounded-lg border-[#E6E8EC] dark:border-[#2A2F3A] text-[#1A1A1A] dark:text-[#F3F4F6]"
					>
						<Minus className="h-3 w-3" />
					</Button>
					<span className="text-sm font-medium text-[#1A1A1A] dark:text-[#F3F4F6] w-6 text-center">
						{item.quantity}
					</span>
					<Button
						variant="outline"
						size="icon"
						onClick={() => increaseQuantity(item.product.id)}
						className="h-7 w-7 rounded-lg border-[#E6E8EC] dark:border-[#2A2F3A] text-[#1A1A1A] dark:text-[#F3F4F6]"
					>
						<Plus className="h-3 w-3" />
					</Button>
				</div>
			</div>
		</motion.div>
	);
});

export default CartItem;
