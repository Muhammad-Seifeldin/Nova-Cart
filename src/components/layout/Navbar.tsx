import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { useCartStore } from "@/store/cartStore";
import { useFilterStore } from "@/store/filterStore";

export default function Navbar() {
	const [searchValue, setSearchValue] = useState("");
	const [mobileOpen, setMobileOpen] = useState(false);
	const totalItems = useCartStore((state) => state.totalItems);
	const setSearchQuery = useFilterStore((state) => state.setSearchQuery);
	const navigate = useNavigate();

	function handleSearch(e: React.FormEvent) {
		e.preventDefault();
		setSearchQuery(searchValue);
		navigate("/shop");
	}

	const navLinks = [
		{ label: "Shop", to: "/shop" },
		{ label: "Categories", to: "/shop" },
		{ label: "Deals", to: "/shop" },
	];

	return (
		<header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0F1115]/80 backdrop-blur-md border-b border-[#E6E8EC] dark:border-[#2A2F3A]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 gap-4">
					{/* Logo */}
					<Logo />

					{/* Desktop Nav Links */}
					<nav className="hidden md:flex items-center gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.label}
								to={link.to}
								className="text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#F3F4F6] transition-colors"
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Search Bar */}
					<form
						onSubmit={handleSearch}
						className="hidden md:flex flex-1 max-w-sm items-center gap-2"
					>
						<div className="relative w-full">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280] dark:text-[#9CA3AF]" />
							<Input
								type="text"
								placeholder="Search products..."
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
								className="pl-9 bg-[#F8F9FB] dark:bg-[#171923] border-[#E6E8EC] dark:border-[#2A2F3A] rounded-lg focus-visible:ring-[#5B6CFF]"
							/>
						</div>
					</form>

					{/* Right Icons */}
					<div className="flex items-center gap-1">
						<ThemeToggle />

						{/* Cart */}
						<Link to="/cart">
							<Button
								variant="ghost"
								size="icon"
								className="relative rounded-xl text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#F3F4F6]"
							>
								<ShoppingCart className="h-5 w-5" />
								{totalItems() > 0 && (
									<span className="absolute -top-1 -right-1 bg-[#5B6CFF] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
										{totalItems()}
									</span>
								)}
							</Button>
						</Link>

						{/* Mobile Menu */}
						<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="md:hidden rounded-xl text-[#6B7280] dark:text-[#9CA3AF]"
								>
									{mobileOpen ? (
										<X className="h-5 w-5" />
									) : (
										<Menu className="h-5 w-5" />
									)}
								</Button>
							</SheetTrigger>
							<SheetContent
								side="left"
								className="w-72 bg-white dark:bg-[#0F1115] border-r border-[#E6E8EC] dark:border-[#2A2F3A]"
							>
								<div className="flex flex-col gap-6 mt-8">
									<Logo />
									{/* Mobile Search */}
									<form onSubmit={handleSearch} className="relative">
										<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280] dark:text-[#9CA3AF]" />
										<Input
											type="text"
											placeholder="Search products..."
											value={searchValue}
											onChange={(e) => setSearchValue(e.target.value)}
											className="pl-9 bg-[#F8F9FB] dark:bg-[#171923] border-[#E6E8EC] dark:border-[#2A2F3A] rounded-lg focus-visible:ring-[#5B6CFF]"
										/>
									</form>
									{/* Mobile Nav Links */}
									<nav className="flex flex-col gap-4">
										{navLinks.map((link) => (
											<Link
												key={link.label}
												to={link.to}
												onClick={() => setMobileOpen(false)}
												className="text-base font-medium text-[#1A1A1A] dark:text-[#F3F4F6] hover:text-[#5B6CFF] dark:hover:text-[#7C8CFF] transition-colors"
											>
												{link.label}
											</Link>
										))}
										<Link
											to="/contact"
											onClick={() => setMobileOpen(false)}
											className="text-base font-medium text-[#1A1A1A] dark:text-[#F3F4F6] hover:text-[#5B6CFF] dark:hover:text-[#7C8CFF] transition-colors"
										>
											Contact
										</Link>
										<Link
											to="/about"
											onClick={() => setMobileOpen(false)}
											className="text-base font-medium text-[#1A1A1A] dark:text-[#F3F4F6] hover:text-[#5B6CFF] dark:hover:text-[#7C8CFF] transition-colors"
										>
											About
										</Link>
									</nav>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
