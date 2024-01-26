// Styles
import "./globals.css";

// Components
import Header from "@/components/Header/Header";

export const metadata = {
  title: "App food",
  description: "App food NextJAS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
