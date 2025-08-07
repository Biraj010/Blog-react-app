import { useContext, useRef } from "react";
import { PostList } from "../store/Posts-List-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        body: postBody,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
       
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="userId" className="form-label">
          UserID
        </label>
        <input
          type="text"
          className="form-control"
          id="userIdELement"
          ref={userIdElement}
          placeholder="Enter your User Id"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="Title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
          placeholder="Enter Title"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="Body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows={2}
          className="form-control"
          id="body"
          ref={postBodyElement}
          placeholder="Tell us more about us"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Enter your Tags using Space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
