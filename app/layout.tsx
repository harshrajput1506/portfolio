import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: 'Harsh Rajput',
	authors: {
		name: "Harsh Rajput",
	},

	description:
		"I'm a Fullstack app developer, fueling my passion for innovation through creative app development.",
	openGraph: {
		title: "Harsh Rajput",
		description:
			"I'm a Fullstack app developer, fueling my passion for innovation through creative app development.",
		url: "http://localhost:3000/",
		siteName: "Harsh Rajput Portfolio",
		images: "/cover1.png",
		type: "website",
	},
	keywords: ["portfolio website", "android developer", "harsh rajput"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
