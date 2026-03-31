import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Word Roots (English MVP)',
  description: 'English-only MVP for word roots and core vocabulary',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
