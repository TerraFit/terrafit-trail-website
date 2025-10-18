import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TerraFit Trail - Professional Outdoor Fitness Trails",
  description: "Transform your property with professional outdoor fitness trails. 15 stations, 25 exercises designed for hotels, lodges, and wellness centers across South Africa.",
  keywords: ["outdoor fitness", "fitness trail", "hotel amenities", "wellness", "South Africa", "exercise stations"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
