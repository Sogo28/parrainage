import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const CreerCompte = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <form action="" className='form'>
          <h2>Créer un compte Parrain</h2>

          <div className='field'>
            <i className="fa-solid fa-phone"></i>
            <input type="text" name="tel" id="tel" placeholder='Numero de telephone' />
          </div>

          <div className='field'>
            <i className="fa-regular fa-envelope"></i>
            <input type="email" name="email" id="email" placeholder='Adresse mail' />
          </div>

          <div className="infos">
            <i className="fa-solid fa-circle-info"></i>
            <p>Vous allez recevoir un code d'authentification sur ces informations de contact.</p>
          </div>

          {/* Utilisez Link pour naviguer vers une autre page */}
          <Link to="/login-parrain">
            <input type="submit" value="Creer" className='submit' />
          </Link>
        </form>
      </div>
    </>
  );
};

export default CreerCompte;
