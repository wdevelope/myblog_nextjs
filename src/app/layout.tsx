import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BasicHeader from './_component/BasicHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'myblog',
  description: '인생의 소소한 일지를 담은 개인 블로그입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BasicHeader />
        {children}
      </body>
    </html>
  );
}
