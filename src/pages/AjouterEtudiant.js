import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Ajouter() {
  const [CIN, setCIN] = useState("");
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [DateDeNaissance, setDateDeNaissance] = useState("");
  const [Email, setEmail] = useState("");
  const [MotDePasse, setMotDePasse] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/create", {
        CIN,
        Nom,
        Prenom,
        DateDeNaissance,
        Email,
        MotDePasse,
      })
      .then((res) => {
        console.log(res);
        navigate("/Etudiant");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-auto bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Ajouter Etudiant</h2>
          <div className="mb-2">
            <label htmlFor="">Cin</label>
            <input
              type="text"
              placeholder="Entrer Cin"
              className="form-control"
              onChange={(e) => setCIN(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Nom</label>
            <input
              type="text"
              placeholder="Entrer nom"
              className="form-control"
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Prenom</label>
            <input
              type="text"
              placeholder="Entrer prenom"
              className="form-control"
              onChange={(e) => setPrenom(e.target.value)}
            />
            <div className="mb-2">
              <label htmlFor="">Date de Naissance</label>
              <input
                type="text"
                placeholder="Entrer Date de Naissance"
                className="form-control"
                onChange={(e) => setDateDeNaissance(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Entrer email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Mot de Passe</label>
            <input
              type="text"
              placeholder="Entrer mot de passe"
              className="form-control"
              onChange={(e) => setMotDePasse(e.target.value)}
            />
          </div>
          <button className="btn btn-success">ajouter</button>
        </form>
      </div>
    </div>
  );
}

export default Ajouter;
