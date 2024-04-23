import { Link } from 'react-router-dom';
const image = require('../assets/candidatImage.jpg');
let CarteCandidat = () => {
  return <>
    <Link to="/infos-candidat">
      <div className="card">
        <div className="image">
          <img src={image} alt="..." className='ppCandidat' />
        </div>
        <div className="description">
          <span className="nomCandidat">Ousmane SONKO</span>
          <span className="nomParti">Pastef</span>
          <div className='quote'>
            <p className='slogan'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam assumenda suscipit. Delectus ducimus molestias.
            </p>
          </div>
          <div className="urlSite">
            <i class="fa-solid fa-earth-americas"> </i>
            <a href="#" className='site'>
              Visiter le site
            </a>
          </div>
        </div>
      </div>
    </Link>

  </>
}

export default CarteCandidat;