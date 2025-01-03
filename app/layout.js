import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dhruv Gahoi",
  description: "Personal website of Dhruv Gahoi"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
