import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css"
function Navbar() {
  const { user, logoutUser } = useAuth();

  return (
    <nav className="nav">
      <div className="nav-container">
        <div>
          <span><strong>GSB Frais</strong></span>
          <Link to="/" className="nav-link home">Accueil</Link>
          {user && <Link to="/dashboard" className="nav-link dashboard">Tableau de bord</Link>}
          {user && <Link to="/frais/ajouter" className="nav-link add-frais">Saisir un frais</Link>}
        </div>

        <div>
          {user ? (
<button 
id="logoutUser"
  onClick={logoutUser} 
  style={{ 
    background: "none",
    color: "white",
    border: "none",
    
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
