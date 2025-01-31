import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anubhav Ray",
  description: "Hello, i am Anubhav Kumar Ray.",
  openGraph: {
    title: "Anubhav Ray",
    description: "Hello, i am Anubhav Kumar Ray.",
    url: "https://anubhavray.me/",
    images: "/project/anu.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mb-20">
          <Header />
        </div>

        <div className="">{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
