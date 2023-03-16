import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post name="Bharath" description="He is a Noob Coder!" />
      <Post name="Ananth" description="He is a Noob Coder!" />
      <Post name="Raghu" description="He is a Noob Coder!" />
      <Post name="Bharath" description="He is a Noob Coder!" />
      <Post name="Ananth" description="He is a Noob Coder!" />
      <Post name="Raghu" description="He is a Noob Coder!" />
      <Post name="Bharath" description="He is a Noob Coder!" />
      <Post name="Ananth" description="He is a Noob Coder!" />
      <Post name="Raghu" description="He is a Noob Coder!" />
      <Post name="Bharath" description="He is a Noob Coder!" />
      <Post name="Ananth" description="He is a Noob Coder!" />
      <Post name="Raghu" description="He is a Noob Coder!" />
    </ul>
  );
}

export default PostsList;
