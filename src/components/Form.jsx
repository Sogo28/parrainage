import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import NavBar from './NavBar';

const Form = () => {
  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher le comportement de soumission par défaut du formulaire
    // Effectuez vos traitements ici
    // Par exemple, naviguez vers une autre page en utilisant Link
  };

  return (
    <>
      <NavBar />
      <div className='container'>
        <form onSubmit={handleSubmit} className='form'>
          <h2>Créer un compte Parrain</h2>

          <div className='field'>
            <i className="fa-solid fa-circle-user"></i>
            <input type="text" name="nom" id="nom" placeholder='Nom de Famille' />
          </div>

          <div className='field'>
            <i className="fa-solid fa-id-card"></i>
            <input type="text" name="CIN" id="CIN" placeholder='CNI' />
          </div>

          <div className='field'>
            <i className="fa-regular fa-id-card"></i>
            <input type="text" name="idElecteur" id="idElecteur" placeholder='N° carte Electeur' />
          </div>

          <div className='field'>
            <i className="fa-solid fa-check-to-slot"></i>
            <input type="text" name="numBureauVote" id="numBureauVote" placeholder='Numero Bureau de vote' />
          </div>

          <div className='field'>
            <i className="fa-solid fa-location-dot"></i>
            <input type="text" name="lieuVote" id="lieuVote" placeholder='Lieu de vote' />
          </div>

          {/* Utilisez Link pour naviguer vers une autre page */}
          <Link to="/creer-compte">
            <input type="submit" value="Verifier" className='submit' />
          </Link>
        </form>
      </div>
    </>
  );
};

export default Form;
