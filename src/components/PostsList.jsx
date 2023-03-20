import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post name="Bharath" description="He is a Noob Coder!" />
        <Post name="Ananth" description="He is a Noob Coder!" />
        
      </ul>
    </>
  );
}

export default PostsList;
