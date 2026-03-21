import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FormField, TextareaField } from "./FormField";
import { inquirySchema, type InquiryFormValues } from "@/lib/schemas";
import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";

export default function InquiryForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<InquiryFormValues>({
		resolver: zodResolver(inquirySchema),
		mode: "onBlur",
	});

	async function onSubmit(data: InquiryFormValues) {
		setIsSubmitting(true);
		try {
			await axios.post("https://jsonplaceholder.typicode.com/posts", data);
			toast.success("Your inquiry has been sent successfully");
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
				id="inquiry-name"
				label="Full Name"
				placeholder="John Doe"
				error={errors.name?.message}
				{...register("name")}
			/>

			<FormField
				id="inquiry-email"
				label="Email Address"
				type="email"
				placeholder="john@example.com"
				error={errors.email?.message}
				{...register("email")}
			/>

			<FormField
				id="inquiry-subject"
				label="Subject"
				placeholder="What is your inquiry about?"
				error={errors.subject?.message}
				{...register("subject")}
			/>

			<TextareaField
				id="inquiry-message"
				label="Message"
				placeholder="Write your message here..."
				rows={5}
				error={errors.message?.message}
				{...register("message")}
			/>

			<motion.div whileTap={{ scale: 0.97 }}>
				<Button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-[#5B6CFF] hover:bg-[#4A5AF0] text-white rounded-xl transition-colors"
				>
					{isSubmitting ? "Sending..." : "Send Inquiry"}
				</Button>
			</motion.div>
		</motion.form>
	);
}
