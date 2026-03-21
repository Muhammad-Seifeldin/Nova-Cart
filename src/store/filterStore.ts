import { create } from "zustand";
import type { FilterState } from "@/types";

interface FilterStore extends FilterState {
	setCategory: (category: string) => void;
	setMinPrice: (price: number) => void;
	setMaxPrice: (price: number) => void;
	setMinRating: (rating: number) => void;
	setSearchQuery: (query: string) => void;
	resetFilters: () => void;
}

const defaultFilters: FilterState = {
	category: "",
	minPrice: 0,
	maxPrice: 1000,
	minRating: 0,
	searchQuery: "",
};

export const useFilterStore = create<FilterStore>()((set) => ({
	...defaultFilters,

	setCategory: (category) => set({ category }),
	setMinPrice: (minPrice) => set({ minPrice }),
	setMaxPrice: (maxPrice) => set({ maxPrice }),
	setMinRating: (minRating) => set({ minRating }),
	setSearchQuery: (searchQuery) => set({ searchQuery }),
	resetFilters: () => set(defaultFilters),
}));
