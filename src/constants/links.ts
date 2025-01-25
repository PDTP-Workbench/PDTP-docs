export type LinkType = {
	label?: string;
	childLinks?: LinkType[];
	description?: string;
	href: string;
};

export const CORE_LINK: LinkType = {
	label: "@pdtp/core",
	href: "/docs/packages/client/core",
	description: "A core package for the PDTP protocol.",
} as const;

export const REACT_LINK: LinkType = {
	label: "@pdtp/react",
	href: "/docs/packages/client/react",
	description: "A React viewer for the PDTP protocol.",
} as const;

export const GO_LINK: LinkType = {
	label: "pdtp-go",
	href: "/docs/packages/server/go",
	description: "A Golang server handler for the PDTP protocol.",
} as const;

export const CLIENT_LINK: LinkType = {
	label: "Client",
	href: "/docs/packages/client",
	description: "Client packages for the PDTP protocol.",
	childLinks: [CORE_LINK, REACT_LINK],
} as const;

export const SERVER_LINK: LinkType = {
	label: "Server",
	href: "/docs/packages/server",
	description: "Server packages for the PDTP protocol.",
	childLinks: [GO_LINK],
} as const;

export const PACKAGES_LINK: LinkType = {
	label: "Packages",
	href: "/docs/packages",
	description: "Packages for the PDTP protocol.",
	childLinks: [CLIENT_LINK, SERVER_LINK],
} as const;

export const EXAMPLES_LINK: LinkType = {
	label: "Examples",
	href: "/docs/examples",
	description: "Examples of using the PDTP protocol.",
} as const;

export const GETTING_STARTED_LINK: LinkType = {
	label: "Getting Started",
	href: "/docs/getting-started",
	description: "Get started with the PDTP protocol.",
} as const;

export const TOP_LINK: LinkType = {
	label: "Top",
	href: "/docs",
	description: "Top page of the PDTP protocol documentation.",
	childLinks: [GETTING_STARTED_LINK, EXAMPLES_LINK, PACKAGES_LINK],
} as const;

export const LINKS: LinkType[] = [
	TOP_LINK,
	GETTING_STARTED_LINK,
	EXAMPLES_LINK,
	PACKAGES_LINK,
];
