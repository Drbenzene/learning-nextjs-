import { Geist, Geist_Mono, Noto_Sans_Linear_A,Noto_Sans, Nata_Sans, Averia_Libre } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const mylocalfont = localFont({
  src: '../../public/fonts/kin_jack_style.ttf',
  variable: '--font-local-sans'
})

const averia = Averia_Libre({
  subsets: ['latin'],
  weight: '300', // Averia Libre weights include 300, 400, 700
  variable: '--font-averia-libre', // <--- Your Custom Variable Name
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome to Engxi | Home",
  description: "Here we doo all shebege banza",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${mylocalfont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
