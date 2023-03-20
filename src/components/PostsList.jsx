import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostsList() {
  const [modalIsVisible, setModalVisibility] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalHandler() {
    setModalVisibility(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangehandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent;
  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost
          myArea={enteredBody}
          myAuthor={enteredAuthor}
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangehandler}
        />
      </Modal>
    );
  }
  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post name={enteredAuthor} description={enteredBody} />
        <Post name={enteredAuthor} description={enteredBody} />
      </ul>
    </>
  );
}

export default PostsList;
