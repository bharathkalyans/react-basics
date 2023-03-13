import "./App.css";


function Item({ name, isPacked }) {
  if (isPacked) {
    return <li style={{ color: "blue" }}>{name} ✅</li>;
  } else {
    return <li>{name}</li>;
  }
}

function MyList() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  const chemists = people.filter((person) => person.profession === "chemist");

  const listItems = chemists.map((item) => <li>{item.name}</li>);

  return <ol>{listItems}</ol>;
}

function App() {
  return (
    <div>
      <section>
        <h1>Sally Ride's Packing List</h1>
        <Item name="apple" isPacked={true} />
        <Item name="banana" isPacked={true} />
        <Item name="orange" isPacked={false} />
      </section>
      <MyList />
    </div>
  );
}

export default App;
