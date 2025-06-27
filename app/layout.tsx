// app/layout.tsx

import "./globals.css";

export const metadata = {
  title: "Mening Next Appim",
  description: "Tailwind bilan ishlaymiz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
