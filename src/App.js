import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import "./styles/Navbar.css";
import Home from "./pages/Home";

// Frais forfait
import FraisAdd from "./pages/FraisAdd";
import FraisEdit from "./pages/FraisEdit";

// Frais hors forfait
import FraisHorsForfait from "./pages/FraisHorsForfait";
import FraisHorsForfaitAdd from "./pages/FraisHorsForfaitAdd";
import FraisHorsForfaitEdit from "./pages/FraisHorsForfaitEdit";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Accueil et Auth */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard sécurisé */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* Frais forfait */}
          <Route path="/frais/ajouter" element={<FraisAdd />} />
          <Route path="/frais/modifier/:id" element={<FraisEdit />} />

          {/* Frais hors forfait */}
          <Route path="/frais/:id/hors-forfait" element={<FraisHorsForfait />} />
          <Route path="/frais/:id/hors-forfait/ajouter" element={<FraisHorsForfaitAdd />} />
          <Route path="/frais/:id/hors-forfait/modifier/:idHF" element={<FraisHorsForfaitEdit />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
