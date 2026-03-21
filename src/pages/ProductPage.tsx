import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";
import ProductDetail from "@/components/product/ProductDetail";
import { useProduct } from "@/hooks/useProducts";
import { useEffect } from "react";

export default function ProductPage() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const { data: product, isLoading, isError } = useProduct(Number(id));

	useEffect(() => {
		if (isError) {
			navigate("/shop", { replace: true });
		}
	}, [isError, navigate]);

	if (isLoading) {
		return (
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<Skeleton className="h-8 w-24 mb-6 rounded-xl" />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<Skeleton className="aspect-square rounded-2xl" />
					<div className="flex flex-col gap-4">
						<Skeleton className="h-4 w-24" />
						<Skeleton className="h-8 w-full" />
						<Skeleton className="h-6 w-1/2" />
						<Skeleton className="h-4 w-32" />
						<Skeleton className="h-24 w-full" />
						<Skeleton className="h-12 w-full rounded-xl" />
					</div>
				</div>
			</div>
		);
	}

	if (!product) return null;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
		>
			<ProductDetail product={product} />
		</motion.div>
	);
}
