import { Inter } from "next/font/google";
import "./globals.css";
import { SessionAuthProvider } from "./context/SessionAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Core App",
  description: "Inventory App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-4">
          {children}
        </main> 
      </body>
    </html>
  );
}
