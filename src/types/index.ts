export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	thumbnail: string;
	images: string[];
	rating: number;
	stock: number;
	availabilityStatus: string;
	discountPercentage: number;
	brand?: string;
	reviews: {
		rating: number;
		comment: string;
		date: string;
		reviewerName: string;
	}[];
}

export interface CartItem {
	product: Product;
	quantity: number;
}

export type Category = string;

export interface FilterState {
	category: string;
	minPrice: number;
	maxPrice: number;
	minRating: number;
	searchQuery: string;
}

export interface ComplaintFormData {
	name: string;
	email: string;
	orderId: string;
	issueCategory: string;
	description: string;
}

export interface InquiryFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}
