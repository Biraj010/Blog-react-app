import { useContext, useEffect } from "react";
import Post from "./Post.jsx";
import { PostList as PostListData } from "../store/Posts-List-store.jsx";
import WelecomeMessage from "./WelcomeMessage.jsx";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && (
        <WelecomeMessage />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
