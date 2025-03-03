import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { DefaultProviders } from "@/components/default-provider";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['600', '400', '300'] 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DefaultProviders>
        {children}
        </DefaultProviders>
        </body>
    </html>
  );
}
