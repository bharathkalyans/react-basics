function Btn() {
  const clickHandler = () => {
    console.log("CLICKED A BUTTON!!");
  };

  const mouseOverhandler = () =>{
    alert('Yo!!')
  };

  return <button onMouseOver={mouseOverhandler} onClick={clickHandler}>Click Me!! 🥺</button>;
}

export default Btn;
