import { z } from "zod";

export const complaintSchema = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be less than 50 characters"),
	email: z.string().email("Please enter a valid email address"),
	orderId: z.string().min(1, "Order ID is required"),
	issueCategory: z.string().min(1, "Please select an issue category"),
	description: z
		.string()
		.min(10, "Description must be at least 10 characters")
		.max(500, "Description must be less than 500 characters"),
});

export const inquirySchema = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be less than 50 characters"),
	email: z.string().email("Please enter a valid email address"),
	subject: z
		.string()
		.min(3, "Subject must be at least 3 characters")
		.max(100, "Subject must be less than 100 characters"),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters")
		.max(500, "Message must be less than 500 characters"),
});

export type ComplaintFormValues = z.infer<typeof complaintSchema>;
export type InquiryFormValues = z.infer<typeof inquirySchema>;
