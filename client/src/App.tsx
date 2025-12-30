import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import MobileNav from "./components/MobileNav";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Gallery from "./pages/Gallery";
import Games from "./pages/Games";
import Learning from "./pages/Learning";
import Journal from "./pages/Journal";
import Projects from "./pages/Projects";
import About from "./pages/About";

// GitHub Pages SPA 路由修复
function useGitHubPagesFix() {
  useEffect(() => {
    const l = window.location;
    if (l.search[1] === '/') {
      const decoded = l.search.slice(1).split('&').map(s => s.replace(/~and~/g, '&')).join('?');
      window.history.replaceState(null, '', l.pathname.slice(0, -1) + decoded + l.hash);
    }
  }, []);
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/music" component={Music} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/games" component={Games} />
      <Route path="/learning" component={Learning} />
      <Route path="/journal" component={Journal} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useGitHubPagesFix();
  
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <MobileNav />
          {/* 主内容区域 - 为侧边栏留出空间 */}
          <div className="lg:ml-64 min-h-screen">
            <div className="pt-16 lg:pt-0">
              <Router />
            </div>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
