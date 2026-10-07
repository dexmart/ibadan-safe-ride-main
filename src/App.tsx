import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import AreasWeServe from "./pages/AreasWeServe";
import NotFound from "./pages/NotFound";
import { LANDING_PAGES } from "./seo/pages";
import { useScrollToHash } from "./hooks/useScrollToHash";

const queryClient = new QueryClient();

const ScrollManager = () => {
  useScrollToHash();
  return null;
};

// The router itself is supplied by the caller: BrowserRouter in main.tsx,
// StaticRouter in entry-server.tsx (build-time prerendering).
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/areas-we-serve" element={<AreasWeServe />} />
        {LANDING_PAGES.map((page) => (
          <Route key={page.path} path={page.path} element={<ServicePage page={page} />} />
        ))}
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
