import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/providers/QueryProvider";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "PetalPost - Craft beautiful digital flowers",
    template: "%s | PetalPost",
  },
  description:
    "Create beautiful digital flower arrangements and send them to the people you love. Pick your blooms, customize the style, write a heartfelt card, and share it with a unique link.",
  keywords: [
    "digital flowers",
    "flower arrangement",
    "gift",
    "send flowers",
    "virtual flowers",
    "PetalPost",
  ],
  openGraph: {
    title: "PetalPost - Craft beautiful digital flowers",
    description: "Create beautiful digital flower arrangements and share them with a unique link.",
    siteName: "PetalPost",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetalPost - Craft beautiful digital flowers",
    description: "Create beautiful digital flower arrangements and share them with a unique link.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <QueryProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </QueryProvider>
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "white",
              border: "1px solid #f0e8de",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
