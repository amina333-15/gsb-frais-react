import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL, getCurrentUser } from "../services/authService";
import "../styles/FraisForm.css";

function FraisForm({ frais = null }) { // reçoit frais en prop
  const navigate = useNavigate();

  // États du formulaire
  const [idFrais, setIdFrais] = useState(null);
  const [anneeMois, setAnneeMois] = useState("");
  const [nbJustificatifs, setNbJustificatifs] = useState("");
  const [montantValide, setMontantValide] = useState(""); // champ montant validé
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Pré-remplissage si modification
  useEffect(() => {
    if (frais) {
      setIdFrais(frais.id_frais);
      setAnneeMois(frais.anneemois || "");
      setNbJustificatifs(frais.nbjustificatifs?.toString() || "");
      setMontantValide(frais.montantvalide?.toString() || "");
    }
  }, [frais]);

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token manquant");

      let fraisData = {
        anneemois: anneeMois,
        nbjustificatifs: parseInt(nbJustificatifs, 10),
      };

      if (frais) {
        // Cas modification
        fraisData.id_frais = idFrais;
        fraisData.montantvalide = parseFloat(montantValide);
        await axios.post(`${API_URL}frais/modif`, fraisData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Cas ajout
        fraisData.id_visiteur = getCurrentUser()["id_visiteur"];
        await axios.post(`${API_URL}frais/ajout`, fraisData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      navigate("/dashboard"); // redirection après succès
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Erreur lors de l'enregistrement"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="frais-form-container">
      <h2>{frais ? "Modifier le frais" : "Saisir un frais"}</h2>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="frais-form">
        <label>
          Année-Mois :
          <input
            type="text"
            value={anneeMois}
            onChange={(e) => setAnneeMois(e.target.value)}
            required
          />
        </label>

        <label>
          Nombre de justificatifs :
          <input
            type="number"
            value={nbJustificatifs}
            onChange={(e) => setNbJustificatifs(e.target.value)}
            required
          />
        </label>

        {frais && ( // champ affiché uniquement en mode modification
          <label>
            Montant validé (€) :
            <input
              type="number"
              step="0.01"
              value={montantValide}
              onChange={(e) => setMontantValide(e.target.value)}
              required
            />
          </label>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Enregistrement..." : frais ? "Mettre à jour" : "Ajouter"}
        </button>
      </form>
    </div>
  );
}

export default FraisForm;
