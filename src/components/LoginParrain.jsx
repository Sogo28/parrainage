import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const LoginParrain = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <form action="" className='form'>
          <h2>Se connecter</h2>

          <div className='field'>
            <i className="fa-regular fa-id-card"></i>
            <input type="text" name="idElecteur" id="idElecteur" placeholder='N° carte Electeur' />
          </div>

          <div className='field'>
            <i className="fa-solid fa-id-card"></i>
            <input type="text" name="CIN" id="CIN" placeholder='N° Identification nationale' />
          </div>

          {/* Utilisez Link pour naviguer vers une autre page */}
          <Link to="/authentification">
            <input type="submit" value="Se connecter" className='submit' />
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginParrain;
