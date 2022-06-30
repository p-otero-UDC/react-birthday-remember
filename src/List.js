export default function List({ people }) {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id} className="person">
          <img src={person.image} alt={person.name}></img>
          <div>
            <h4>{person.name}</h4>
            <p>{person.age}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
