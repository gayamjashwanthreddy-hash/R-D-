import type { Metadata } from 'next';
import './globals.css';
import InstitutionalHeader from '@/components/navigation/InstitutionalHeader';
import InstitutionalFooter from '@/components/navigation/InstitutionalFooter';

export const metadata: Metadata = {
  title: 'Research & Development Centre (M-MARTIC) | MVSR Engineering College',
  description:
    'Official Research & Development and Consultancy Portal of Maturi Venkata Subba Rao (MVSR) Engineering College, Hyderabad. Autonomous institution affiliated with Osmania University, driving sponsored defense projects, intellectual property, and research excellence.',
  keywords: [
    'MVSR Engineering College',
    'MVSR R&D',
    'M-MARTIC',
    'Maturi Venkata Subba Rao',
    'Osmania University Ph.D. Research Centre',
    'DRDO Sponsored Projects',
    'GHMC Quality Control Agency',
    'Engineering Research Hyderabad',
  ],
  authors: [{ name: 'Central R&D and Consultancy Cell, MVSR' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-institutional-charcoal font-sans antialiased">
        <InstitutionalHeader />
        <main className="flex-grow">{children}</main>
        <InstitutionalFooter />
      </body>
    </html>
  );
}
