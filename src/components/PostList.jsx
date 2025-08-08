import Post from "./Post.jsx";
import WelecomeMessage from "./WelcomeMessage.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData()

  return (
    <>
     
      { postList.length === 0 && <WelecomeMessage />}
      { postList.map((post) => (
      <Post key={post.id} post={post} />
      ))}
    </>
  ); 
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data.posts
})}

export default PostList;
