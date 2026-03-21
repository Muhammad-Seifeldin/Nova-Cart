import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-dark.svg";

export default function Logo() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Link to="/" className="flex items-center">
				<img src={logoLight} alt="NovaCart" className="h-8 w-auto" />
			</Link>
		);
	}

	return (
		<Link to="/" className="flex items-center">
			<img
				src={resolvedTheme === "dark" ? logoDark : logoLight}
				alt="NovaCart"
				className="h-8 w-auto"
			/>
		</Link>
	);
}
