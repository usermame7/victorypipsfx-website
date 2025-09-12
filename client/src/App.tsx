import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import JoinPage from "@/pages/JoinPage";
import ContactPage from "@/pages/ContactPage";
import DisclaimerPage from "@/pages/DisclaimerPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfUsePage from "@/pages/TermsOfUsePage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/join" component={JoinPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/disclaimer" component={DisclaimerPage} />
      <Route path="/privacy" component={PrivacyPolicyPage} />
      <Route path="/terms" component={TermsOfUsePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
