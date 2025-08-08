import { Form, redirect } from "react-router-dom";


const CreatePost = () => {
  //const { addPost } = useContext(PostList);



  return (
    <Form method="POST" className="create-post" >
      <div className="mb-2">
        <label htmlFor="userId" className="form-label">
          UserID
        </label>
        <input
          type="text"
          className="form-control"
          id="userIdELement"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="tags"
          placeholder="Enter your Tags using Space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");

}

export default CreatePost;
