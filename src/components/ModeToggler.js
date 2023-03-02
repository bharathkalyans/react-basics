function ModeToggler(props) {
  var darkModeOn = false;
  const darkMode = <h1>Dark Mode On!!</h1>;
  const lightMode = <h1>Light Mode On!!</h1>;
  const clickHandler = () => {
    darkModeOn = !darkModeOn;
    console.log(darkMode);
  };
  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={clickHandler}>Click Me!! 🥺</button>
    </div>
  );
}

export default ModeToggler;
