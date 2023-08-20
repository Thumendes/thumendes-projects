import "./globals.css";

import { ModeToggle, ThemeProvider } from "@/components/theme";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthur Mendes Pereira",
  description: "Desenvolvedor de Software Full Stack Bom Arthur Mendes Pereira",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <nav className="flex justify-end py-3 container mx-auto max-w-screen-lg">
            <ModeToggle />
          </nav>

          {children}

          <footer className="py-10 container mx-auto max-w-screen-lg">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">Contato</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col">
                <p className="text-sm text-muted-foreground">Github:</p>
                <a
                  className="flex space-x-2 items-center"
                  href="https://github.com/Thumendes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  <span>Thumendes</span>
                </a>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-muted-foreground">E-mail:</p>
                <a className="flex space-x-2 items-center" href="mailto:thumendess@gmail.com">
                  <FaEnvelope />
                  <span>thumendess@gmail.com</span>
                </a>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-muted-foreground">Celular:</p>
                <a
                  className="flex space-x-2 items-center"
                  href="https://wa.me/5531984736688?text=Ol%C3%A1%21+"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                  <span>(31) 98473-6688</span>
                </a>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-muted-foreground">E-mail:</p>
                <a
                  className="flex space-x-2 items-center"
                  href="https://www.linkedin.com/in/arthur-mendes-pereira-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  <span>Arthur Mendes</span>
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
