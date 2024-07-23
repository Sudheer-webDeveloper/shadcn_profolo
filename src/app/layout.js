import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins", // Define a CSS variable
});

export const metadata = {
  title: "Profolo",
  description: "Apply job and get it ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <main className="flex w-[100vw] h-[100vh] bg-sidebar">
          <section>
            {" "}
            <Sidebar />{" "}
          </section>
          <section
            className="bg-mainBg flex-1   
          rounded-tl-3xl rounded-bl-3xl
          px-5 py-2"
          >
            <section>
              <Navbar />
            </section>
            {children}{" "}
          </section>
        </main>
      </body>
    </html>
  );
}
