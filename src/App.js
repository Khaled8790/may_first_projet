import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Acceuil,
  Enseignants,
  Etudiant,
  AjouterEtudiant,
  ModifierEtudiant,
  Apropos,
  Navbar,
} from "./pages/index";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Acceuil />} />
          <Route exact path="Acceuil" element={<Acceuil />} />
          <Route exact path="Etudiant" element={<Etudiant />} />
          <Route exact path="Ajouter" element={<AjouterEtudiant />} />
          <Route exact path="Modifier/:id" element={<ModifierEtudiant />} />
          <Route exact path="Enseignants" element={<Enseignants />} />
          <Route exact path="Apropos" element={<Apropos />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
