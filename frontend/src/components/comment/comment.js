const Comment = ({ comment }) => {

    return(
      <>
      {/* SEE COMMENTS*/}
    <div className="all-comments-section" data-cy="comment" key={ comment._id }>
    <img src={!comment.user.img ? "/images/default_image.png" : comment.user.img} alt="default_image" className="comment-author-pic" ></img> 
    <div id="single-comment-wrapper">
      <span className="comment-author">{ comment.user.name }</span>
      <span className="comment-content">{comment.message}</span>
    </div>
  </div>
  </>   
        
    )
}

export default Comment;