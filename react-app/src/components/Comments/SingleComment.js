// import React from 'react'

// function SingleComment({comment}) {

//     return (
//         <li className="comments-list-item">
//             <p className="comment-content">{comment.content}</p>
//             <p className="comment-author">- {comment.user_id}</p>
//         </li>
//     );
// }

// export default SingleComment;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteComment from './DeleteComment.js';
import { readComments, updateComment } from '../../store/comments';
import "./comments.css"

function SingleComment({comment}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user);
    const { id: userId } = user

    const articleId = comment.article_id
    const commentId = comment.id

    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [updatedComment, setUpdatedComment] = useState(comment.content)
    const [validationErrors, setValidationErrors] = useState([])

    // delete comment
    const handleDelete = (e) => {
        e.preventDefault();
        setShowDelete(true)
    }

    // edit comment
    const handleEdit = (e) => {
        e.preventDefault();
        setShowEdit(true)
    }

    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        const payload = {commentId, updatedComment, articleId}
        let editedComment = await dispatch(updateComment(payload))
        if (editedComment) {
            setShowEdit(false)
            await dispatch(readComments())
            history.push(`/articles/${articleId}`)
        }
    }

    useEffect(() => {
        const errors = [];
        // if (updatedComment.length < 1) errors.push("enter comment")
        setValidationErrors(errors)
    }, [updatedComment])


    if (userId === comment.user_id) {
        if (showEdit) {
            return (
                <div className="edit-comment-div">

                    <form className="" onSubmit={handleSubmitEdit}>
                        <textarea
                            placeholder={comment.content}
                            name="updatedComment"
                            value={updatedComment}
                            onChange={(e) => setUpdatedComment(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={validationErrors.length > 0}
                        >
                            update
                        </button>
                    </form>

                    <form>
                        <button
                            onClick={() => setShowEdit(false)}
                        >
                            cancel
                        </button>
                    </form>
                </div>
            )
        } else {
            return (
                <li className="comments-list-item">
                    <p className="comment-content">{comment.content}</p>
                    <p className="comment-author">- {comment.user.username}</p>
                    <div className="user-comment-change-div">
                        <i onClick={handleEdit} className="fas fa-pencil-alt"></i>
                        <i onClick={handleDelete} className="fas fa-trash-alt"></i>
                    </div>
                    {showDelete && <DeleteComment comment={comment} showDeleteModal={showDelete} setShowDeleteModal={setShowDelete} />}
                </li>
            )
        }
    } else {
        return (
            <li className="comments-list-item">
                <p className="comment-content">{comment.content}</p>
                <p className="comment-author">- {comment.user.username}</p>
            </li>
        );

    }

};

export default SingleComment;
