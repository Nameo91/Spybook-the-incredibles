import "./Post.css";
import CommentForm from "../comment/CommentForm";
import Comment from "../comment/comment";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolideHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

const elementHeartOutline = <FontAwesomeIcon icon={faRegularHeart} size="2x" />;
const elementHeartShaded = <FontAwesomeIcon icon={faSolideHeart} size="2x" />;


const Post = ({post, sessionUserId }) => {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [relatedLike, setRelatedLike] = useState({users: []});

  const loadComments = () => {
    if (token) {
      fetch("/comments", {
        headers: {
        'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(async data => {
        window.localStorage.setItem("token", data.token)
        setToken(window.localStorage.getItem("token"))
        setComments(data.message);
      })
    }
  };

  const relatedComments = [];

  comments.map((comment) => {
    if (post._id === comment.post) {
      relatedComments.push(comment);
    }
  });

  useEffect(loadComments, []);

  const loadLikes = () => {
    if (token) {
      fetch("/likes", {
        headers: {
        'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(async data => {
        setLikes(data.likes);
        (data.likes).map((like) => {
          if (post._id === like.post) {
            setRelatedLike(like);
          } 
        });
        
      })
    }
  };

  useEffect(loadLikes, []);

  const handleLikeSubmit = async (event) => {
    event.preventDefault();
  
    if (token) fetch('/likes', {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: post._id })
    })  
      .then(response => response.json())
      .then(
        data => {  
        loadLikes();
        console.log(data);
      })     
}

  const likeButton = () => {
    if (relatedLike.users.some(e => e._id === sessionUserId)) {
      return elementHeartShaded;
    } else {
      return elementHeartOutline;
    }
  };

  console.log(relatedLike);

  return (
    <div className="posts-container" data-cy="post" key={post._id}>
      <div className="post">
        {/* POST HEADER */}
        <div className="post-header">
          <div className="header-left">
            <img
              src="/images/bird-avator.png"
              alt="avatar"
              className="post-author-pic"
            ></img>
            <div className="post-author">
              <span className="author-name">{post.user.name}</span>
            </div>
            <span className="post-date">
              {post.date.substr(11, 5)} {post.date.substr(0, 10)}
            </span>
          </div>
        </div>
        {/*POST CONTENT */}
        <div className="post-content">
          <p className="content-paragraph">{post.message}</p>
          <div className="image-content">
            < img className="post-image" src={post.img} />
          </div>
        </div>
            {/*POST FOOTER*/}
            <div className="post-footer">
              <div className="reactions-container">
                <div className="likes">
                  <button onClick={ handleLikeSubmit } id="likes-button"> { likeButton() } </button>
                  <span id="likes-count">{relatedLike.users.length}</span>
                </div>
                <div>
                  <span className="comments-number">{relatedComments.length} Comments</span>
                </div>
              </div>
          <div className="saparator"></div>
        </div>
        {/* WRITE COMMENT*/}
        <CommentForm postId={post._id} loadComments={ loadComments } />

        {/* ALL COMMENTS*/}
        {relatedComments.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
      </div>
    </div>
  );
};


export default Post;
