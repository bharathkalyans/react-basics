import classes from "./Post.module.css";

function Post({ name, description }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{name}</p>
      <p className={classes.text}>{description}</p>
    </li>
  );
}

export default Post;
