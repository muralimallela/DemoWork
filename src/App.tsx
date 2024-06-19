import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Header from "./components/Header/Header";



function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
