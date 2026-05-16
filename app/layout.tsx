import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duc (Daniel) Ngo | Senior Data / BI Analyst",
  description:
    "Duc (Daniel) Ngo is a Senior Data / Business Intelligence Analyst focused on BI systems, product analytics, marketing measurement, AI workflows, machine learning, and data visualization using SQL, Python, Looker, LookML, GCP, R, Power BI, and Tableau.",
  openGraph: {
    title: "Duc (Daniel) Ngo | Senior Data / BI Analyst",
    description:
      "I connect analytics, BI, and AI to help teams measure performance, understand users, and make better decisions.",
    url: "https://danielngo.netlify.app",
    siteName: "Duc (Daniel) Ngo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#05070D] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
