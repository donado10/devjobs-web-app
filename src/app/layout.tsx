import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-devops-kumbh bg-devops-secondary-lightGrey`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
