import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata = {
  title: "AlgoAliens",
  description: "Master Algorithms with AlgoAliens"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#0F0A19] text-white`}>
        {children}
      </body>
    </html>
  )
}