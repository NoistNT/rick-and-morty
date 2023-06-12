/* eslint-disable react/prop-types */
export default function Card({ character }) {
  const { name, species, gender, image } = character
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
    </div>
  )
}
