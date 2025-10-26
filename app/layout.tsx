export const metadata = {
  title: "Car NetWork",
  description: "Discover Car NetWork, your ultimate destination for buying new and used cars. Browse a wide selection of high-quality vehicles and find the perfect car for you quickly and easily.",
  openGraph: {
    title: "Car NetWork",
    description: "Browse new and used cars at Car NetWork. Find your perfect car easily!",
    url: "https://yourwebsite.com",
    siteName: "Car NetWork",
    images: [
      {
        url: "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/195fc18dbb488debdc22325994b0a2b6.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car NetWork",
    description: "Find new and used cars easily at Car NetWork",
    images: ["https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/195fc18dbb488debdc22325994b0a2b6.png"],
  },
};

import "./globals.css";
import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
