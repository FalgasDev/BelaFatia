import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "Bela Fatia",
  description: "A sua fatia de cada dia",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
