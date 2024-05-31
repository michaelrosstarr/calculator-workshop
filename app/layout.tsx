import '@/styles/global.css'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem={false} defaultTheme='light' attribute='class'>{children}</ThemeProvider>
      </body>
    </html>
  );
}
