import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "@/types";

interface CartStore {
	items: CartItem[];
	addItem: (product: Product) => void;
	removeItem: (productId: number) => void;
	increaseQuantity: (productId: number) => void;
	decreaseQuantity: (productId: number) => void;
	clearCart: () => void;
	totalItems: () => number;
	totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			items: [],

			addItem: (product) => {
				const existing = get().items.find(
					(item) => item.product.id === product.id,
				);
				if (existing) {
					set((state) => ({
						items: state.items.map((item) =>
							item.product.id === product.id
								? { ...item, quantity: item.quantity + 1 }
								: item,
						),
					}));
				} else {
					set((state) => ({
						items: [...state.items, { product, quantity: 1 }],
					}));
				}
			},

			removeItem: (productId) => {
				set((state) => ({
					items: state.items.filter((item) => item.product.id !== productId),
				}));
			},

			increaseQuantity: (productId) => {
				set((state) => ({
					items: state.items.map((item) =>
						item.product.id === productId
							? { ...item, quantity: item.quantity + 1 }
							: item,
					),
				}));
			},

			decreaseQuantity: (productId) => {
				const existing = get().items.find(
					(item) => item.product.id === productId,
				);
				if (existing && existing.quantity === 1) {
					get().removeItem(productId);
				} else {
					set((state) => ({
						items: state.items.map((item) =>
							item.product.id === productId
								? { ...item, quantity: item.quantity - 1 }
								: item,
						),
					}));
				}
			},

			clearCart: () => set({ items: [] }),

			totalItems: () =>
				get().items.reduce((acc, item) => acc + item.quantity, 0),

			totalPrice: () =>
				get().items.reduce(
					(acc, item) => acc + item.product.price * item.quantity,
					0,
				),
		}),
		{
			name: "novacart-cart",
		},
	),
);
