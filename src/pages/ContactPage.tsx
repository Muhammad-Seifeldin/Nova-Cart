import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComplaintForm from "@/components/contact/ComplaintForm";
import InquiryForm from "@/components/contact/InquiryForm";
import { MessageSquare, AlertCircle } from "lucide-react";

export default function ContactPage() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
		>
			{/* Header */}
			<div className="flex flex-col gap-2 mb-8 text-center">
				<h1 className="text-3xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
					Contact Us
				</h1>
				<p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
					Have a question or concern? We're here to help.
				</p>
			</div>

			{/* Tabs */}
			<Tabs defaultValue="inquiry">
				<TabsList className="w-full bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-xl p-1 mb-8">
					<TabsTrigger
						value="inquiry"
						className="flex-1 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-[#0F1115] data-[state=active]:text-[#1A1A1A] dark:data-[state=active]:text-[#F3F4F6] text-[#6B7280] dark:text-[#9CA3AF] transition-all"
					>
						<MessageSquare className="h-4 w-4 mr-2" />
						General Inquiry
					</TabsTrigger>
					<TabsTrigger
						value="complaint"
						className="flex-1 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-[#0F1115] data-[state=active]:text-[#1A1A1A] dark:data-[state=active]:text-[#F3F4F6] text-[#6B7280] dark:text-[#9CA3AF] transition-all"
					>
						<AlertCircle className="h-4 w-4 mr-2" />
						File a Complaint
					</TabsTrigger>
				</TabsList>

				{/* Form Container */}
				<div className="bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-2xl p-6 sm:p-8">
					<TabsContent value="inquiry">
						<InquiryForm />
					</TabsContent>
					<TabsContent value="complaint">
						<ComplaintForm />
					</TabsContent>
				</div>
			</Tabs>
		</motion.div>
	);
}
