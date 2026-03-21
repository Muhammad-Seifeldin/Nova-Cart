import { useQuery } from "@tanstack/react-query";
import {
	fetchProducts,
	fetchProductById,
	fetchCategories,
} from "@/api/fakestore";
import { useFilterStore } from "@/store/filterStore";
import type { Product } from "@/types";

export function useProducts() {
	const { category, minPrice, maxPrice, minRating, searchQuery } =
		useFilterStore();

	const {
		data: products = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
		staleTime: 1000 * 60 * 5,
	});

	const filtered = products.filter((product: Product) => {
		const matchesCategory = category ? product.category === category : true;
		const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
		const matchesRating = product.rating.rate >= minRating;
		const matchesSearch = product.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());

		return matchesCategory && matchesPrice && matchesRating && matchesSearch;
	});

	return { products: filtered, isLoading, isError };
}

export function useProduct(id: number) {
	return useQuery({
		queryKey: ["product", id],
		queryFn: () => fetchProductById(id),
		staleTime: 1000 * 60 * 5,
		enabled: !!id,
	});
}

export function useCategories() {
	return useQuery({
		queryKey: ["categories"],
		queryFn: fetchCategories,
		staleTime: 1000 * 60 * 60,
	});
}

export function useTrendingProducts() {
	const {
		data: products = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
		staleTime: 1000 * 60 * 5,
	});

	const trending = [...products]
		.sort((a, b) => b.rating.rate - a.rating.rate)
		.slice(0, 8);

	return { products: trending, isLoading, isError };
}

export function useBestSellers() {
	const {
		data: products = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
		staleTime: 1000 * 60 * 5,
	});

	const bestSellers = [...products]
		.sort((a, b) => b.rating.count - a.rating.count)
		.slice(0, 8);

	return { products: bestSellers, isLoading, isError };
}

export function useTopRated() {
	const {
		data: products = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
		staleTime: 1000 * 60 * 5,
	});

	const topRated = products.filter(
		(product: Product) => product.rating.rate >= 4.5,
	);

	return { products: topRated, isLoading, isError };
}
