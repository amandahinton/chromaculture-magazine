import React from 'react';
import SingleComment from './SingleComment'
// import CommentForm from './CommentForm'
import "./comments.css"

function CommentsList() {

    return (
        <div className="comment-list-div">
            <h3>Comments</h3>
            <SingleComment />
            {/* <CommentForm /> */}
        </div>
    );
}

export default CommentsList;
