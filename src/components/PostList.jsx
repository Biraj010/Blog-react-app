import { useContext } from "react";
import Post from "./Post.jsx";
import { PostList as PostListData } from "../store/Posts-List-store.jsx";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post, index) => (
        <Post key={post.id ? post.id : index} post={post} />
      ))}
    </>
  );
};

export default PostList;
