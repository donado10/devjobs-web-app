import Header from "@/components/Header";
import "./globals.css";
import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-devops-kumbh`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
