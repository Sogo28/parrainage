import logo from './logo.svg';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import LoginParrain from './components/LoginParrain.jsx';
import AfficherCandidats from './components/AfficherCandidats.jsx'
import InfosCandidat from './components/InfosCandidat.jsx';
import Authentification from './components/AuthentificationParrain.jsx';
import CreerCompte from './components/CreerCompteParrain.jsx';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route exact path="/creer-compte" element={<CreerCompte />} />
        <Route exact path="/login-parrain" element={<LoginParrain />} />
        <Route exact path="/authentification" element={<Authentification />} />
        <Route exact path="/afficher-candidats" element={<AfficherCandidats />} />
        <Route exact path="/infos-candidat" element={<InfosCandidat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
