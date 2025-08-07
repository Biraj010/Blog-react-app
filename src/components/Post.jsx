import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Posts-List-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary rounded-pill me-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Post;
