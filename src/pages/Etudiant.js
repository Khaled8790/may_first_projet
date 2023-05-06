import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Etudiant() {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = async (id) => {
    try {
      axios.delete("http://localhost:8080/remove/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-3">
        <Link to="/Ajouter" className="btn btn-success">
          Ajouter+
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>DateDeNaissance</th>
              <th>Email</th>
              <th>CIN</th>
              <th>MotDePasse</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {List.map((data, i) => (
              <tr key={i}>
                <td>{data.Nom}</td>
                <td>{data.Prenom}</td>
                <td>{data.DateDeNaissance}</td>
                <td>{data.Email}</td>
                <td>{data.CIN}</td>
                <td>{data.MotDePasse}</td>
                <td>{data.Photo}</td>
                <td>
                  <Link to={`/Modifier/${data.id}`} className="btn btn-primary">
                    Modifier
                  </Link>
                  <button
                    className="btn btn-danger "
                    onClick={(e) => handleDelete(data.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Etudiant;
