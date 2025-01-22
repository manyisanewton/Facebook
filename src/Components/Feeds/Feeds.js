import { useState } from "react";
import "./Feed.css";
import AlicePhoto from "../assets/Alice.jpg"; // Import Alice's photo
 // Import Bob's photo

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Alice`s Post",
      content: AlicePhoto, // Use imported photo for Alice
      likes: 5,
      comments: ["Looks so Beautiful!", "SO nice my sister?"],
    },
    
  ]);

  const [newComments, setNewComments] = useState({}); // Track new comments per post

  // Handle like button click
  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Handle adding a new comment
  const handleAddComment = (id) => {
    const comment = newComments[id]?.trim();
    if (comment) {
      setPosts(
        posts.map((post) =>
          post.id === id
            ? { ...post, comments: [...post.comments, comment] }
            : post
        )
      );
      setNewComments({ ...newComments, [id]: "" }); // Reset the input for this post
    }
  };

  // Handle input change for a specific post
  const handleCommentChange = (id, value) => {
    setNewComments({ ...newComments, [id]: value });
  };

  return (
    <div className="feedContainer">
      <h2 className="feedTitle">News Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          {/* Post Header */}
          <div className="postHeader">
            <span className="postUser">{post.user}</span>
          </div>

          {/* Post Content (Photo) */}
          <div className="postContent">
            <img
              src={post.content}
              alt={`${post.user}'s post`}
              className="postPhoto"
            />
          </div>

          {/* Post Actions */}
          <div className="postActions">
            <button onClick={() => handleLike(post.id)} className="likeButton">
              Like ({post.likes})
            </button>
            <button className="commentButton">
              Comment ({post.comments.length})
            </button>
          </div>

          {/* Post Comments */}
          <div className="postComments">
            {post.comments.map((comment, index) => (
              <p key={index} className="comment">
                {comment}
              </p>
            ))}
          </div>

          {/* Add Comment Section */}
          <div className="addCommentSection">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComments[post.id] || ""}
              onChange={(e) => handleCommentChange(post.id, e.target.value)}
              className="commentInput"
            />
            <button
              onClick={() => handleAddComment(post.id)}
              className="commentButton"
            >
              Add Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
