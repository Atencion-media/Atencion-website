import { inter, satoshi } from "@/constants/fonts";
import "./globals.css";
import Navbar from "@/common/layout/Navbar";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${inter.className} bg-primary`}>
      <header className="sticky top-4 left-0 z-50 w-4/5 mx-auto p-2 flex items-center justify-between rounded-full  bg-white bg-opacity-20 backdrop-blur-lg">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
