import { inter, satoshi } from "@/constants/fonts";
import "./globals.css";
import Navbar from "@/common/layout/Navbar";
import Footer from "@/common/layout/Footer";
export const metadata = {
  title: "Atencion Media",
  description: "We are what every company craves for",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${inter.className} bg-primary`}>
          <Navbar />
        {children}

        <div className="w-full p-4 bg-black2 mt-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
