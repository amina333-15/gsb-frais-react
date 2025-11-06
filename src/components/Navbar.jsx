import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logoutUser } = useAuth();

  return (
    <nav className="nav">
      <div className="nav-container">
        <div>
          <span><strong>GSB Frais</strong></span>
          <Link to="/" className="nav-link home">Accueil</Link>
          {user && <Link to="/dashboard" className="nav-link dashboard">Tableau de bord</Link>}
        </div>

        <div>
          {user ? (
<button 
  onClick={logoutUser} 
  style={{ 
    background: "none",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginTop: "8px"
  }}
>
  Déconnexion
</button>

          ) : (
            <Link to="/login" className="nav-link login">Connexion</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
