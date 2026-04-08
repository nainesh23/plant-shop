import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Leafly — Premium Plant Shop",
  description:
    "Discover beautiful, healthy plants for your home and garden. Premium indoor plants, succulents, herbs and outdoor plants delivered to your door.",
  keywords: "plants, indoor plants, succulents, herbs, plant shop, buy plants online",
  icons: {
    icon: "/assets/Favicon/faviconlogo.png",
    shortcut: "/assets/Favicon/faviconlogo.png",
    apple: "/assets/Favicon/faviconlogo.png",
  },
  openGraph: {
    title: "Leafly — Premium Plant Shop",
    description: "Discover beautiful, healthy plants for your home and garden.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-jakarta bg-[#FAF8F3] text-[#1a2e1a] antialiased">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
