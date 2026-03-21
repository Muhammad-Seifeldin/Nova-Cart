import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function App() {
	return (
		<div className="min-h-screen flex flex-col bg-[#FFFFFF] dark:bg-[#0F1115]">
			<Navbar />
			<main className="flex-1">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/product/:id" element={<ProductPage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</main>
			<Footer />
			<Toaster />
		</div>
	);
}
