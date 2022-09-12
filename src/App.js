import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./component/Menu";
import DriftPage from "./pages/DriftPage";
import ForzaPage from "./pages/ForzaPage";
import HomePage from "./pages/HomePage";
import TimeAttackPage from "./pages/TimeAttackPage";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
