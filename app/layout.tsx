import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { LoadingScreen } from '@/components/ui/loading-screen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Krishna Kumar Singh - Full Stack Developer & AI Explorer',
  description: 'Portfolio of Krishna Kumar Singh, a passionate Full Stack Developer in Grade 12, building AI systems to solve real-world problems.',
  keywords: ['Full Stack Developer', 'AI', 'Next.js', 'React', 'Python', 'Machine Learning'],
  authors: [{ name: 'Krishna Kumar Singh' }],
  creator: 'Krishna Kumar Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://krishnakumarsingh.dev',
    title: 'Krishna Kumar Singh - Full Stack Developer & AI Explorer',
    description: 'Portfolio of Krishna Kumar Singh, a passionate Full Stack Developer building AI systems.',
    siteName: 'Krishna Kumar Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Kumar Singh - Full Stack Developer & AI Explorer',
    description: 'Portfolio of Krishna Kumar Singh, a passionate Full Stack Developer building AI systems.',
    creator: '@krishnasinghh_',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LoadingScreen />
          <ScrollProgress />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}