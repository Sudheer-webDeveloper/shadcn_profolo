import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/Navbar";
import { StateContextProvider } from "@/contexts/StateContext";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins", // Define a CSS variable
});

export const metadata = {
  title: "Profolo",
  description: "Apply job and get it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-sidebar custom-scrollbar`}>
        <StateContextProvider>
          <main className="flex w-full h-screen overflow-hidden">
            <section className="h-full w-[104px] bg-sidebar">
              <Sidebar />
            </section>
            <section
              className="flex-1 bg-mainBg rounded-tl-3xl rounded-bl-3xl px-8 py-2 overflow-y-auto"
              style={{ width: 'calc(100vw - 104px)' }}
            >
              <section className="">
                <Navbar />
              </section>
              <section className="">{children}</section>
            </section>
          </main>
        </StateContextProvider>
      </body>
    </html>
  );
}
