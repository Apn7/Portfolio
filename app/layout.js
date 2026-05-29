import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata = {
  title: "Ekramul Alam | Portfolio",
  description:
    "Personal portfolio of Ekramul Alam — CSE undergraduate, full stack developer, and problem solver. Explore my projects, skills, and experience.",
  keywords: [
    "Ekramul Alam",
    "Portfolio",
    "Web Developer",
    "CSE",
    "Full Stack Developer",
    "Next.js",
  ],
  authors: [{ name: "Ekramul Alam" }],
  openGraph: {
    title: "Ekramul Alam | Portfolio",
    description:
      "Personal portfolio of Ekramul Alam — CSE undergraduate, full stack developer, and problem solver.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
