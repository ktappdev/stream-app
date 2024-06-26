import type { Metadata } from "next";
import { Inter, Atkinson_Hyperlegible, Manrope } from "next/font/google";
import "./globals.css";
import LeftSideDrawer from './components/LeftSideDrawer';
import RightSideDrawer from "./components/RightSideDrawer";
import Body from "./components/Body";
const myFont = Manrope({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className="flex flex-col min-h-screen bg-mytheme-darkBackground">
          <div className="flex flex-row flex-1 max-w-[1920px] max-h-[1080px] mx-auto">

            <LeftSideDrawer />
            <Body />
            {/* <main className="flex-1 p-4">{children}</main> */}
            <RightSideDrawer />
          </div>
        </div>
      </body>
    </html>
  );
}
