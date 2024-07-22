import "./globals.css";
import { Rubik } from "next/font/google";
import Background from "../public/background.png";

// components
import Navbar from "./components/Navbar";
import Image from "next/image";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <div className="absolute inset-0 z-[-1]">
          <Image
            src={Background}
            alt="Background logo"
            layout="fill"
            objectFit="cover"
            className="w-full"
          />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
