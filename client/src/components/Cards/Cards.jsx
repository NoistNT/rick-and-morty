/* eslint-disable react/prop-types */
import Card from '../Card/Card'

export default function Cards({ characters }) {
  return (
    <div>
      {characters.isLoading && <h1>Loading...</h1>}
      {characters.error && <div>Error: {characters.error} </div>}
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  )
}
