import { Metadata } from 'next';
import { RootStyleRegistry } from '@/app/emotion';
import '../../public/assets/styles/globals.css';
import '../../public/assets/styles/layout.css';
export const metadata: Metadata = {
  title: `Huurs`,
  description: `Huurs`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Include the Poppins font from Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
