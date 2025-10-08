// app/layout.tsx
import { Suspense } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loading from "./loading";

export const metadata = {
  title: "My App",
  description: "Next.js Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
