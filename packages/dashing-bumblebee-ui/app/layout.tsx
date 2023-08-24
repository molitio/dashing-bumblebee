import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashing Bumblebee",
  description: "logistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
