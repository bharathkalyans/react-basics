import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPost() {
  const [myArea, setmyArea] = useState();

  function changeBodyHandler(event) {
    setmyArea(event.target.value);
    console.log(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{myArea}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
