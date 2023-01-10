import { Footer, Header } from "@components/common";
import Providers from "@context/Providers";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body>
        <Providers>
          <div className="overflow-hidden">
            <Header />
            <div className="fit">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
