import { useState } from "react";
import "./CommentsList.css";
import CommentImage from "../assets/Comment.jpg"; // Correct relative path

function Comments() {
  const [comments, setComments] = useState([
    { id: 1, user: "Alice", text: "This is amazing!" },
    { id: 2, user: "Bob", text: "Looking Handsome!" },
    { id: 3, user: "Charlie", text: "really liking the smile!" },
  ]);

  const [newComment, setNewComment] = useState(""); // For the user's comment input
  const [likes, setLikes] = useState(0); // Track the number of likes

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        user: "You", // Replace with dynamic user information if available
        text: newComment,
      };
      setComments([...comments, newCommentObj]); // Update comments with the new comment
      setNewComment(""); // Reset input field
    }
  };

  // Function to handle like button click
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="commentsContainer">
      {/* Photo Section */}
      <div className="photoSection">
        <img
          src={CommentImage} // Use the imported image
          alt="Comment Placeholder"
          className="photo"
        />
        <div className="likeSection">
          <button onClick={handleLike} className="likeButton">
            Like
          </button>
          <span className="likeCount">
            {likes} {likes === 1 ? "Like" : "Likes"}
          </span>
        </div>
      </div>

      {/* Comments Title */}
      <h4 className="commentsTitle">Comments</h4>

      {/* Comments List */}
      <ul className="commentsList">
        {comments.map((comment) => (
          <li key={comment.id} className="commentItem">
            <span className="commentUser">{comment.user}:</span>
            <span className="commentText">{comment.text}</span>
          </li>
        ))}
      </ul>

      {/* Add Comment Section */}
      <div className="addCommentSection">
        <h5>Add Your Comment:</h5>
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="commentInput"
        />
        <button onClick={handleAddComment} className="commentButton">
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default Comments;
