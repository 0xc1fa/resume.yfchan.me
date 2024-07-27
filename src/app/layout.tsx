import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const computerModern = localFont({
	src: [
		{
			path: "../fonts/computer-modern/cmunrm.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/computer-modern/cmunti.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../fonts/computer-modern/cmunbx.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../fonts/computer-modern/cmunbi.ttf",
			weight: "700",
			style: "italic",
		},
	],
});

export const metadata: Metadata = {
	title: "Resume - Chan Yat Fu Jacky",
	description: "My e-resume",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={computerModern.className}>{children}</body>
		</html>
	);
}
