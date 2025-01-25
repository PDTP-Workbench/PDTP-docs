import { BackGround } from "@/components/BackGround";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";
export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "PDTP | Portable Document Transfer Protocol",
	description:
		"PortableDocumentTransferProtocol (PDTP) enables fast and reliable PDF viewing in congested networks by splitting content into text, images, and fonts for efficient transfer.",
	openGraph: {
		title: "PDTP | Portable Document Transfer Protocol",
		type: "website",
		url: "https://pdtp.tosaken1116.com",
		description:
			"PortableDocumentTransferProtocol (PDTP) enables fast and reliable PDF viewing in congested networks by splitting content into text, images, and fonts for efficient transfer.",
		siteName: "PDTP | Portable Document Transfer Protocol",
		locale: "ja_JP",
		images: {
			url: "https://pdtp.tosaken1116.com/og.jpg",
			alt: "PDTP | Portable Document Transfer Protocol",
			width: 1200,
			height: 630,
			type: "image/jpeg",
		},
	},
	twitter: {
		card: "summary_large_image",
		site: "@Tosaken_dev",
		creator: "@Tosaken_dev",
		title: "PDTP | Portable Document Transfer Protocol",
		description:
			"PortableDocumentTransferProtocol (PDTP) enables fast and reliable PDF viewing in congested networks by splitting content into text, images, and fonts for efficient transfer.",
		images: {
			url: "https://pdtp.tosaken1116.com/og.jpg",
			alt: "PDTP | Portable Document Transfer Protocol",
			width: 1200,
			height: 630,
			type: "image/jpeg",
		},
	},

	icons: {
		icon: {
			url: "/pdtp-logo.svg",
			type: "image/svg+xml",
			rel: "icon",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<BackGround />
				<main className="pt-24">{children}</main>
			</body>
		</html>
	);
}
