import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-devops-kumbh bg-devops-secondary-lightGrey`}>
        {children}
      </body>
    </html>
  );
}
