// import type { Metadata } from "next"
// import { Outfit, Playfair_Display, Montserrat } from "next/font/google"
// import "./globals.css"
// import type React from "react" // Import React

// const outfit = Outfit({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-outfit",
// })

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-playfair",
// })

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-montserrat",
// })

// export const metadata: Metadata = {
//   title: "Virtual Try-On",
//   description: "Try on your favorite eyewear virtually",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${outfit.variable} ${playfair.variable} ${montserrat.variable} font-sans`}>{children}</body>
//     </html>
//   )
// }



// import './globals.css'


import type { Metadata } from "next"
import { Outfit, Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Virtual Try-On",
  description: "Try on your favorite eyewear virtually",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} ${montserrat.variable} font-sans flex flex-col min-h-screen`}>
        <main className="flex-grow">{children}</main>
        
        {/* Footer */}
        <footer className="w-full text-center py-4 bg-[#aa70a7] text-white mt-8">
          <p>© {new Date().getFullYear()} Abhishek Purohit & Swastik Shukla</p>
          <a 
            href="https://github.com/Abhishek-puro" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline"
          >
            GitHub Profile
          </a>
        </footer>
      </body>
    </html>
  )
}
