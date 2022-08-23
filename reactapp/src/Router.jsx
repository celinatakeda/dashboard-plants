import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { On } from "./pages/On";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/On" element={<On />} />      
    </Routes>
  )
}