import { Inter, Poppins, Sixtyfour } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const sixtyfour = Sixtyfour({
  subsets: ["latin"],
  variable: "--font-sixtyfour",
});
