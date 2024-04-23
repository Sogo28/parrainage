import CarteCandidat from './CarteCandidat';
import NavBar from './NavBar';
const AfficherCandidat = () => {
  return <>
    <NavBar />
    <div className="container">
      <div className="cardsContainer">
        <CarteCandidat />
        <CarteCandidat />
        <CarteCandidat />
        <CarteCandidat />
        <CarteCandidat />
        <CarteCandidat />
        <CarteCandidat />
        <CarteCandidat />
        <CarteCandidat />
      </div>
    </div>
  </>
}
export default AfficherCandidat