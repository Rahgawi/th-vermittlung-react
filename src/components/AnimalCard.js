import { Link } from "react-router-dom";
import "./AnimalCard.css";

export default function AnimalCard({ singleAnimal }) {
  function getGenderIcon(gender) {
    if (gender === "male") return "fa fa-mars";
    else return "fa fa-venus";
  }

  return (
    <div className="animalCard">
      <Link to={`../animalprofile/${singleAnimal.animalId}`}>
        <div className="animalImageContainer">
          <img
            src={"https:" + singleAnimal.animalImageUrl}
            alt={singleAnimal.breed}
          />
        </div>
        <div className="cardText">
          <div className="cardHead">
            <h3>{singleAnimal.name}</h3>
          </div>
          <div className="cardBody">
            <span>{`Age: ${singleAnimal.age} years`}</span>
            <span className={getGenderIcon(singleAnimal.gender)}></span>
          </div>
        </div>
      </Link>
    </div>
  );
}
