import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/splashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Specialties from "./pages/Specialties";
import History from "./pages/History";
import Touring from "./pages/Touring";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Investintea from "./pages/investintea";

const queryClient = new QueryClient();

const App = () => {

  const [showSplash, setShowSplash] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 50000); // splash screen duration

    return () => clearTimeout(timer);
  }, []);



    return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {showSplash ? (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
      <BrowserRouter>
        <div className="flex flex-col min-h-screen font-poppins ">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/specialties" element={<Specialties />} />
              <Route path="/history" element={<History />} />
              <Route path="/touring" element={<Touring />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/investintea" element={<Investintea />} />
              {/* Add more routes as needed */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
       )}
    </TooltipProvider>
  </QueryClientProvider>
    )
};

export default App;
