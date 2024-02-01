import classes from "./PostsList.module.css";

import Post from "./Post";

export default function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="author1" body="javascript + typescript" />
      <Post author="author2" body="javascript + react" />
    </ul>
  );
}
