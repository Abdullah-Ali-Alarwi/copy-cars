import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoadingWrapper from "./components/LoadingWrapper";

export const metadata: Metadata = {
  title: "Cars Used and New",
  description: "We provide you with all types of cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif" }} className="antialiased">
        <Header />
        <LoadingWrapper>{children}</LoadingWrapper>
        <Footer />
      </body>
    </html>
  );
}
