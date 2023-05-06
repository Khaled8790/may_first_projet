import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Modifier() {
  const [CIN, setCIN] = useState("");
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [DateDeNaissance, setDateDeNaissance] = useState("");
  const [Email, setEmail] = useState("");
  const [MotDePasse, setMotDePasse] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch("http://localhost:8080/update/" + id, {
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
          <h2>Modifier Etudiant</h2>
          <div className="mb-2">
            <label htmlFor="">Cin</label>
            <input
              type="text"
              placeholder="Modifier Cin"
              className="form-control"
              onChange={(e) => setCIN(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Nom</label>
            <input
              type="text"
              placeholder="Modifier nom"
              className="form-control"
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Prenom</label>
            <input
              type="text"
              placeholder="Modifier prenom"
              className="form-control"
              onChange={(e) => setPrenom(e.target.value)}
            />
            <div className="mb-2">
              <label htmlFor="">Date de Naissance</label>
              <input
                type="text"
                placeholder="Modifier Date de Naissance"
                className="form-control"
                onChange={(e) => setDateDeNaissance(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Modifier email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Mot de Passe</label>
            <input
              type="text"
              placeholder="Modifier mot de passe"
              className="form-control"
              onChange={(e) => setMotDePasse(e.target.value)}
            />
          </div>
          <button className="btn btn-success">modifier</button>
        </form>
      </div>
    </div>
  );
}

export default Modifier;
