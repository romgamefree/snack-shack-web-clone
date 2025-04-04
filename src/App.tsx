
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import GameDetails from "./pages/GameDetails";
import GamePlay from "./pages/GamePlay";
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance outside the component
const queryClient = new QueryClient();

// Convert the App component to a function declaration style
const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Helmet>
              <title>GameSnacks Clone - Play Fun Instant Games Online</title>
              <meta name="description" content="Play free instant games online - GameSnacks offers fun, quick games with no downloads required. Enjoy puzzle, action, racing games and more!" />
            </Helmet>
            
            <Toaster />
            <Sonner />
            
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/game/:id" element={<GameDetails />} />
              <Route path="/play/:id" element={<GamePlay />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
