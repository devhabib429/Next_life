import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Donors from "./pages/Donors";
import Volunteer from "./pages/Volunteer";
import DonationPrograms from "./pages/DonationPrograms";
import Partnership from "./pages/Partnership";
import Fundraising from "./pages/Fundraising";
import CorporateSponsorship from "./pages/CorporateSponsorship";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow mt-[76px]">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donors" element={<Donors />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/donation-programs" element={<DonationPrograms />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/fundraising" element={<Fundraising />} />
              <Route path="/corporate-sponsorship" element={<CorporateSponsorship />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;