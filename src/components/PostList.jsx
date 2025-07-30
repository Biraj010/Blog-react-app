import { useContext, useEffect, useState } from "react";
import Post from "./Post.jsx";
import { PostList as PostListData } from "../store/Posts-List-store.jsx";
import WelecomeMessage from "./WelcomeMessage.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [ fetching, setFetching ] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && 
      <WelecomeMessage />}
      {!fetching && postList.map((post) => 
      <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
