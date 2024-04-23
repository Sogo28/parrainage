import { Link } from 'react-router-dom';
const image = require('../assets/candidatImage.jpg')
const DetailsCandidat = () => {
  return <>
    <div className="wrapper">
      <div className="close">
        <Link to="/afficher-candidats">
          <i class="fa-solid fa-circle-xmark btn-close"></i>
        </Link>
      </div>
      <div className="description">
        <span className="nomCandidat">Ousmane SONKO</span>
        <span className="nomParti">Pastef</span>
      </div>
      <img src={image} alt="" className='afficheCandidat' />
      <div className="sloganContainer">
        <i class="fa-solid fa-quote-left"></i>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, voluptatibus! Minus modi natus corrupti reprehenderit dicta numquam cumque ratione doloremque.
        </p>
        <i class="fa-solid fa-quote-right"></i>
      </div>
      <div className="site">

      </div>
      <button className='btn-parrainer'>
        <i class="fa-solid fa-check-to-slot"></i>
        Parrainer
      </button>
    </div>
  </>
}

export default DetailsCandidat