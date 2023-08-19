import "./globals.css";

import { ModeToggle, ThemeProvider } from "@/components/theme";
import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Arthur Mendes Pereira",
  description: "Desenvolvedor de Software Full Stack Bom Arthur Mendes Pereira",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <nav className="flex justify-end py-3 container mx-auto max-w-screen-lg">
          <ModeToggle />
        </nav>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>

        <footer className="py-6 container mx-auto max-w-screen-lg">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">Contato</h3>
          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground">E-mail:</p>
            <a href="mailto:thumendess@gmail.com">thumendess@gmail.com</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
