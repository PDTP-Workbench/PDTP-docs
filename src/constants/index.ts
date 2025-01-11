export const Z_INDEX = {
	BACKGROUND: "-z-10",
	HERO: "z-10",
	MODAL: "z-40",
	NAVBAR: "z-20",
	FOOTER: "z-30",
	BASE: "z-0",
} as const;

export const PDTP_OVERVIEW =
	"PortableDocumentTransferProtocol (PDTP) enables fast and reliable PDF viewing in congested networks by splitting content into text, images, and fonts for efficient transfer.";

export const PDTP_FEATURES = [
	{
		title: "Stable Viewing in Congested Networks",
		description:
			"PDF files can be viewed smoothly and reliably even in congested network environments.",
	},
	{
		title: "Content Splitting Transfer",
		description:
			"Splits PDFs into components such as text, low-resolution images, font data, and high-resolution images, and transfers the necessary data efficiently.",
	},
	{
		title: "Optimized Data Transmission",
		description:
			"Reduces overall data transmission by transferring only necessary parts, enabling comfortable use even in mobile environments.",
	},
] as const;
