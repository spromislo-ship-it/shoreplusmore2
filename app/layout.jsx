import "./globals.css";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: {
    default: "Shore Plus More | Steve Promislo",
    template: "%s | Shore Plus More",
  },
  description:
    "Shore Plus More provides local real estate guidance for Ventnor, Margate, and Longport, New Jersey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
