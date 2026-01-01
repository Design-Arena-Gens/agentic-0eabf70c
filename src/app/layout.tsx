import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Python Foundations Playbook',
  description:
    'A concise, interactive ebook that teaches the fundamentals of Python programming through examples, exercises, and best practices.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
