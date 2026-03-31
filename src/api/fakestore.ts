import axios from "axios";
import type { Product, Category } from "@/types";

const BASE_URL = "https://dummyjson.com";

const api = axios.create({
	baseURL: BASE_URL,
});

export async function fetchProducts(): Promise<Product[]> {
	const { data } = await api.get<{ products: Product[] }>(
		"/products?limit=194",
	);
	return data.products;
}

export async function fetchProductById(id: number): Promise<Product> {
	const { data } = await api.get<Product>(`/products/${id}`);
	return data;
}

export async function fetchCategories(): Promise<Category[]> {
	const { data } = await api.get<{ slug: string; name: string; url: string }[]>(
		"/products/categories",
	);
	return data.map((cat) => cat.slug);
}

export async function fetchProductsByCategory(
	category: string,
): Promise<Product[]> {
	const { data } = await api.get<{ products: Product[] }>(
		`/products/category/${encodeURIComponent(category)}`,
	);
	return data.products;
}
