import { useContext, useRef } from "react";
import { PostList } from "../store/Posts-List-store"

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split("");
    
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";


    addPost(userId, postTitle, postBody, reactions, tags);

  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
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
      <div className="mb-3">
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
      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows={4}
          className="form-control"
          id="body"
          ref={postBodyElement}
          placeholder="Tell us more about us"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
          placeholder="Numer of Reactions"
        />
      </div>
      <div className="mb-3">
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
