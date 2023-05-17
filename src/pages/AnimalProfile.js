import { useParams } from "react-router-dom";
import "./AnimalProfile.css";
import InterestForm from "../components/InterestForm";

export default function AnimalProfile({ animals }) {
  const { animalID } = useParams();
  const singleAnimal = animals.find((item) => item.animalid == animalID);

  const animalImageUrl = singleAnimal.animalimageurl;

  return (
    <div className="animalProfile">
      <div
        className="animalImage"
        style={{
          backgroundImage: `url(${animalImageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="animImg">
          {" "}
          <img src={animalImageUrl} alt={singleAnimal.breed} />
        </div>
      </div>
      <div className="desc-profile">
        <div className="description">
          <h3>{singleAnimal.name}</h3>
          {singleAnimal.description}
        </div>
        <div className="profile">
          <h3>Profile</h3>
          <div className="attribute-list">
            <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{singleAnimal.name}</td>
                </tr>
                <tr>
                  <td>Breed:</td>
                  <td>{singleAnimal.breed}</td>
                </tr>
                <tr>
                  <td>Age:</td>
                  <td>{singleAnimal.age * 1}</td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td>{singleAnimal.gender}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tags-container">
            {singleAnimal.tags
              ? singleAnimal.tags.map((item) => {
                  return (
                    <div className="animalTag" key={item}>
                      {item}
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
      <InterestForm singleAnimal={singleAnimal} />
    </div>
  );
}
