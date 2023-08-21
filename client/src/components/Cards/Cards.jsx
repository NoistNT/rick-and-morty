/* eslint-disable react/prop-types */
import Card from "../Card/Card";

export default function Cards({ characters }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {characters.isLoading && <h1>Loading...</h1>}
      {characters.error && <div>Error: {characters.error} </div>}
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}
