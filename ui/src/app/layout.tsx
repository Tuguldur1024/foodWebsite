import { Header } from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Toaster from "@/components/ui/toaster";
import { AuthProvider } from "@/providers/AuthProvider";
import { FoodProvider } from "@/providers/CardProvider";

export const metadata = {
  title: "Food Delivery",
  description: "Order now! We deliver fast!",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="flex flex-col min-h-screen justify-between">
          <AuthProvider>
            <FoodProvider>
            <div className="w-full container mx-auto">
              <Header />
              <Toaster />
              {children}
            </div></FoodProvider>
          </AuthProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
