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
        <header className="sticky top-4 left-0 z-50 w-4/5 mx-auto p-2 flex items-center justify-between rounded-full  bg-white bg-opacity-20 backdrop-blur-lg">
          <Navbar />
        {children}

        <div className="fixed bottom-0 left-0 z-60 w-full p-4 bg-black2">
          <Footer />
        </div>
      </body>
    </html>
  );
}
