import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Tableau de bord</h1>
      {user ? (
        <p>Bienvenue {user.login} !</p>
      ) : (
        <p>Vous devez être connecté pour accéder au tableau de bord.</p>
      )}
    </div>
  );
}

export default Dashboard;
