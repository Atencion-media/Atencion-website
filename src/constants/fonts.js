import { Inter } from "next/font/google";
import localFont from 'next/font/local'
export const inter = Inter({ subsets: ["latin"] });
export const satoshi = localFont({
  src:[{
    path:"../../public/fonts/Satoshi-Variable.ttf",
    weight:"300"
  }  ],
  variable:"--font-satoshi"
})