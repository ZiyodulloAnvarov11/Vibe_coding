import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Minimalist Swiss Style',
  description: 'A high-end, ultra-minimalist professional website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased min-h-screen bg-swissWhitePure text-swissBlack dark:bg-swissBlack dark:text-swissWhitePure selection:bg-swissSlateDim selection:text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="py-12 border-none">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4">
                <span className="font-bold tracking-tight text-lg uppercase">Studio.</span>
              </div>
              <nav className="col-span-12 md:col-span-8 flex justify-start md:justify-end gap-8 mt-4 md:mt-0 text-sm font-medium text-swissSlateDark dark:text-swissSlateDim">
                <a href="#" className="hover:text-swissBlack dark:hover:text-swissWhitePure transition-colors mix-blend-difference">Work</a>
                <a href="#" className="hover:text-swissBlack dark:hover:text-swissWhitePure transition-colors mix-blend-difference">Profile</a>
                <a href="#" className="hover:text-swissBlack dark:hover:text-swissWhitePure transition-colors mix-blend-difference">Contact</a>
              </nav>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
