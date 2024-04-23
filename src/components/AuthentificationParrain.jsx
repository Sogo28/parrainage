import NavBar from "./NavBar"
import { Link } from 'react-router-dom';

let Authentification = () => {
  return <>
    <NavBar />
    <div className='container'>
      <form action="" className='form'>
        <h2>Entrer Votre Code d'Authentification</h2>

        <div className='field'>
          <i class="fa-solid fa-circle-user"></i>
          <input type="text" className="disabled" name="nom" id="nom" value='GAYE' disabled />
        </div>

        <div className='field'>
          <i class="fa-solid fa-id-card"></i>
          <input type="text" className="disabled" name="prenom" id="prenom" value='Cheikh' disabled />
        </div>

        <div className='field'>
          <i class="fa-regular fa-id-card"></i>
          <input type="" className="disabled" name="dateNaissance" id="dateNaissance" value='13/02/98' disabled />
        </div>

        <div className='field'>
          <i class="fa-solid fa-check-to-slot"></i>
          <input type="text" className="disabled" name="numBureauVote" id="numBureauVote" value='12' disabled />
        </div>

        <div className='field'>
          <i class="fa-solid fa-location-dot"></i>
          <input type="text" className="disabled" name="lieuVote" id="lieuVote" value='Keur Massar' disabled />
        </div>

        <div className='field'>
          <i class="fa-solid fa-key"></i>
          <input type="text" name="codeVerification" id="codeVerification" placeholder='Code de Vérification' />
        </div>


        <Link to="/afficher-candidats">
          <input type="submit" value="Valider" className='submit' />
        </Link>

      </form>

    </div>

  </>
}

export default Authentification