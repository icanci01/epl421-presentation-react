import { Home } from "./views/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./views/Settings";
import Footer from "./Footer";

export function Authenticated() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
