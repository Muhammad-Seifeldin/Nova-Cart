import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CartItem from "@/components/cart/CartItem";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function CartPage() {
	const { items, totalItems, totalPrice, clearCart } = useCartStore();

	function handleCheckout() {
		clearCart();
		toast.success("Order placed successfully! Thank you for shopping with us.");
	}

	if (items.length === 0) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.25, ease: "easeOut" }}
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center gap-6 text-center"
			>
				<div className="bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-full p-8">
					<ShoppingCart className="h-12 w-12 text-[#6B7280] dark:text-[#9CA3AF]" />
				</div>
				<h1 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
					Your cart is empty
				</h1>
				<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] max-w-sm">
					Looks like you haven't added anything to your cart yet. Start shopping
					to fill it up!
				</p>
				<Button
					asChild
					className="bg-[#5B6CFF] hover:bg-[#4A5AF0] text-white rounded-xl px-8 transition-colors"
				>
					<Link to="/shop">
						Start Shopping
						<ArrowRight className="h-4 w-4 ml-2" />
					</Link>
				</Button>
			</motion.div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
		>
			{/* Header */}
			<div className="flex items-center gap-4 mb-8">
				<Button
					variant="ghost"
					asChild
					className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#F3F4F6] rounded-xl -ml-2"
				>
					<Link to="/shop">
						<ArrowLeft className="h-4 w-4 mr-2" />
						Continue Shopping
					</Link>
				</Button>
			</div>

			<h1 className="text-3xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6] mb-2">
				Your Cart
			</h1>
			<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-8">
				{totalItems()} {totalItems() === 1 ? "item" : "items"} in your cart
			</p>

			<div className="flex flex-col lg:flex-row gap-8">
				{/* Cart Items */}
				<div className="flex-1 flex flex-col gap-3">
					<AnimatePresence>
						{items.map((item) => (
							<CartItem key={item.product.id} item={item} />
						))}
					</AnimatePresence>
				</div>

				{/* Order Summary */}
				<div className="lg:w-80 shrink-0">
					<div className="bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-2xl p-6 flex flex-col gap-4 sticky top-24">
						<h2 className="text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
							Order Summary
						</h2>

						<Separator className="bg-[#E6E8EC] dark:bg-[#2A2F3A]" />

						<div className="flex flex-col gap-3">
							<div className="flex items-center justify-between text-sm">
								<span className="text-[#6B7280] dark:text-[#9CA3AF]">
									Subtotal ({totalItems()} items)
								</span>
								<span className="font-medium text-[#1A1A1A] dark:text-[#F3F4F6]">
									{formatPrice(totalPrice())}
								</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-[#6B7280] dark:text-[#9CA3AF]">
									Shipping
								</span>
								<span className="font-medium text-[#22C55E]">
									{totalPrice() > 50 ? "Free" : formatPrice(9.99)}
								</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-[#6B7280] dark:text-[#9CA3AF]">
									Tax (8%)
								</span>
								<span className="font-medium text-[#1A1A1A] dark:text-[#F3F4F6]">
									{formatPrice(totalPrice() * 0.08)}
								</span>
							</div>
						</div>

						<Separator className="bg-[#E6E8EC] dark:bg-[#2A2F3A]" />

						<div className="flex items-center justify-between">
							<span className="font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
								Total
							</span>
							<span className="text-xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
								{formatPrice(
									totalPrice() +
										(totalPrice() > 50 ? 0 : 9.99) +
										totalPrice() * 0.08,
								)}
							</span>
						</div>

						<motion.div whileTap={{ scale: 0.97 }}>
							<Button
								onClick={handleCheckout}
								className="w-full bg-[#5B6CFF] hover:bg-[#4A5AF0] text-white rounded-xl transition-colors"
							>
								Checkout
								<ArrowRight className="h-4 w-4 ml-2" />
							</Button>
						</motion.div>

						<p className="text-xs text-center text-[#6B7280] dark:text-[#9CA3AF]">
							Free shipping on orders over $50
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
