import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Fraunces } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pasko.vercel.app'),
  title: 'PASKO Government Exam Finder',
  description:
    'Find Indian government exam notifications — UPSC, State PCS, SSC, Police, Teacher, Railways and Banking — sorted by what is open now, opening soon, or recently closed.',
  openGraph: {
    title: 'PASKO Government Exam Finder',
    description:
      'Find Indian government exam notifications sorted by what is open now, opening soon, or recently closed.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PASKO Government Exam Finder',
    description:
      'Find Indian government exam notifications sorted by what is open now, opening soon, or recently closed.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
