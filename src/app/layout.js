import { inter, satoshi } from "@/constants/fonts";
import "./globals.css";
import Navbar from "@/common/layout/Navbar";
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
      </body>
    </html>
  );
}
