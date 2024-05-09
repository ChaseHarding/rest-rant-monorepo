
function CommentCard({ comment, onDelete }) {
    let authorName = "Unknown Author";
    try {
        authorName = `${comment.author.firstName} ${comment.author.lastName}`;
    } catch (error) {
        console.error("Error getting author name:", error);
    }
    return (
        <div className="border col-sm-4">
            <h2 className="rant">{comment.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{comment.content}</h4>
            <h3>
                <strong>- {authorName} </strong>
            </h3>
            <h4>Rating: {comment.stars}</h4>
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Comment
            </button>
        </div>
    )
}

export default CommentCard;