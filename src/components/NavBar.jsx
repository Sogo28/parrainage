import Proptypes from 'prop-types';
let logo = require('../assets/sn.jpg');
let profile = require('../assets/profile.png');
let NavBar = () => {
  return (
    <>
      <div className='navContainer'>
        <img src={logo} alt="" className='logo' />
        <ul className='navBar'>
          <li>
            <img src={profile} alt="" className='profile' />
          </li>
        </ul>
      </div>

    </>
  )
}

export default NavBar;