export default function TodoList(props) {
  const person = props.person;
  console.log(person);
  // const person = {
  //   name: "Bharath Kalyan S",
  //   url: "https://i.imgur.com/7vQD0fPs.jpg",
  //   theme: {
  //     backgroundColor: "black",
  //     color: "pink",
  //   }
  // };

  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img src={person.url} alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
