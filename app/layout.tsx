import "./globals.css";

export const metadata = {
  title: "TunnelNet | Managed Network Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}