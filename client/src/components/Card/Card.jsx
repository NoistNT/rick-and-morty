/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Card({ character }) {
  const { id, name, species, gender, image } = character;
  return (
    <div className="flex bg-white rounded-lg my-8 p-4">
      <Link to={`/character/${id}`}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </Link>
    </div>
  );
}
