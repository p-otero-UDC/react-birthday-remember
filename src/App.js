import "./styles.css";
import List from "./List";
import { useState } from "react";
import data from "./data";

export default function App() {
  const [people, setPeople] = useState([]);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople(data)}>View all</button>
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}
