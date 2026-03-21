import axios from "axios";
import type { Product, Category } from "@/types";

const BASE_URL = "https://fakestoreapi.com";

const api = axios.create({
	baseURL: BASE_URL,
});

export async function fetchProducts(): Promise<Product[]> {
	const { data } = await api.get<Product[]>("/products");
	return data;
}

export async function fetchProductById(id: number): Promise<Product> {
	const { data } = await api.get<Product>(`/products/${id}`);
	return data;
}

export async function fetchCategories(): Promise<Category[]> {
	const { data } = await api.get<Category[]>("/products/categories");
	return data;
}

export async function fetchProductsByCategory(
	category: string,
): Promise<Product[]> {
	const { data } = await api.get<Product[]>(
		`/products/category/${encodeURIComponent(category)}`,
	);
	return data;
}
