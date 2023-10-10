import "../../styles/index.css";
import "../../styles/globals.css";
import { Metadata } from "next";
import ScrollTop from "../../components/ScrollTop";
import Provider from "../../components/Provider";

export const metadata: Metadata = {
  title: "David Tuta",
  description: "tuts website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <Provider>
        <body>
          <ScrollTop />
          {children}
        </body>
      </Provider>
    </html>
  );
}
