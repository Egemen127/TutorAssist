import React, { useState } from 'react';
import './Forum.css'; 
import Navbar from './Navbar';

function Forum({ user }) {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [newCommentContent, setNewCommentContent] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [editedPostContent, setEditedPostContent] = useState('');

  const createNewPost = () => {
    const newPost = {
      id: posts.length + 1,
      user: user.username,
      content: newPostContent,
      likes: 0,
      comments: [],
    };
    setPosts([...posts, newPost]);
    setNewPostContent('');
  };

  const addCommentToPost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedPost = {
          ...post,
          comments: [...post.comments, newCommentContent],
        };
        return updatedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
    setNewCommentContent('');
  };

  const likePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedPost = {
          ...post,
          likes: post.likes + 1,
        };
        return updatedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const editPost = () => {
    const updatedPosts = posts.map((post) => {
      if (post.id === selectedPostId) {
        const updatedPost = {
          ...post,
          content: editedPostContent,
        };
        return updatedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
    setSelectedPostId(null);
    setEditedPostContent('');
  };

  const deletePost = (postId) => {
    const filteredPosts = posts.filter((post) => post.id !== postId);
    setPosts(filteredPosts);
  };

  return (<>
    <Navbar username={user.username}/>
    <div className="forum-container">
      <div className="post-creator">
        <textarea
          rows="4"
          cols="50"
          placeholder="Write a post..."
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        ></textarea>
        <button onClick={createNewPost}>Post</button>
      </div>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <span>{post.user}</span>
              <button onClick={() => likePost(post.id)}>Like ({post.likes})</button>
            </div>
            {selectedPostId === post.id ? (
              <div className="edit-post">
                <textarea
                  rows="4"
                  cols="50"
                  value={editedPostContent}
                  onChange={(e) => setEditedPostContent(e.target.value)}
                ></textarea>
                <button onClick={editPost}>Save</button>
              </div>
            ) : (
              <>
                <p>{post.content}</p>
                <div className="comment-section">
                  <textarea
                    rows="2"
                    cols="40"
                    placeholder="Add a comment..."
                    value={newCommentContent}
                    onChange={(e) => setNewCommentContent(e.target.value)}
                  ></textarea>
                  <button onClick={() => addCommentToPost(post.id)}>Comment</button>
                  {post.comments.length > 0 && (
                    <div className="comments">
                      {post.comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                      ))}
                    </div>
                  )}
                </div>
                {user.username === post.user && (
                  <div className="post-actions">
                    <button onClick={() => setSelectedPostId(post.id)}>Edit</button>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Forum;

