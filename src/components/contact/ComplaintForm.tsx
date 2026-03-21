import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FormField, TextareaField, SelectField } from "./FormField";
import { complaintSchema, type ComplaintFormValues } from "@/lib/schemas";
import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";

const issueCategories = [
	{ value: "damaged", label: "Damaged Item" },
	{ value: "wrong_item", label: "Wrong Item Received" },
	{ value: "not_delivered", label: "Item Not Delivered" },
	{ value: "quality", label: "Quality Issue" },
	{ value: "other", label: "Other" },
];

export default function ComplaintForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ComplaintFormValues>({
		resolver: zodResolver(complaintSchema),
		mode: "onBlur",
	});

	async function onSubmit(data: ComplaintFormValues) {
		setIsSubmitting(true);
		try {
			await axios.post("https://jsonplaceholder.typicode.com/posts", data);
			toast.success("Your complaint has been submitted successfully");
			reset();
		} catch {
			toast.error("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<motion.form
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-5"
		>
			<FormField
				id="complaint-name"
				label="Full Name"
				placeholder="John Doe"
				error={errors.name?.message}
				{...register("name")}
			/>

			<FormField
				id="complaint-email"
				label="Email Address"
				type="email"
				placeholder="john@example.com"
				error={errors.email?.message}
				{...register("email")}
			/>

			<FormField
				id="complaint-order"
				label="Order ID"
				placeholder="e.g. ORD-12345"
				error={errors.orderId?.message}
				{...register("orderId")}
			/>

			<SelectField
				id="complaint-category"
				label="Issue Category"
				options={issueCategories}
				error={errors.issueCategory?.message}
				{...register("issueCategory")}
			/>

			<TextareaField
				id="complaint-description"
				label="Description"
				placeholder="Please describe your issue in detail..."
				rows={5}
				error={errors.description?.message}
				{...register("description")}
			/>

			<motion.div whileTap={{ scale: 0.97 }}>
				<Button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-[#5B6CFF] hover:bg-[#4A5AF0] text-white rounded-xl transition-colors"
				>
					{isSubmitting ? "Submitting..." : "Submit Complaint"}
				</Button>
			</motion.div>
		</motion.form>
	);
}
