import NavMenu from "@/app/NavMenu";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import AuthProvider from "./AuthProvider";

const myFont = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "NextSpace",
  description: "MySpace clone with Next.js 13",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={myFont.className}>
          <div className="container">
            <NavMenu />
            <main>{children}</main>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
