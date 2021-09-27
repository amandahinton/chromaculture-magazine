import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteComment from './DeleteComment.js';
import { readComments, updateComment } from '../../store/comments';
import "./comments.css"
// import CommentForm from './CommentForm'

function SingleComment({comment}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user);
    const { id: userId } = user

    const articleId = comment.article_id
    const commentId = comment.id

    // edit comment
    const [showEdit, setShowEdit] = useState(false)
    const handleEdit = (e) => {
        e.preventDefault();
        setShowEdit(true)
    }

    const [updatedComment, setUpdatedComment] = useState(comment.comment)
    const [validationErrors, setValidationErrors] = useState([])
    useEffect(() => {
        const errors = [];
        if (updatedComment.length < 1) errors.push("enter comment")
        setValidationErrors(errors)
    }, [updatedComment])

    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        const payload = {commentId, updatedComment}
        let editedComment = await dispatch(updateComment(payload))
        if (editedComment) {
            setShowEdit(false)
            await dispatch(readComments())
            history.push(`/articles/${articleId}`)
        }
    }

    // delete comment
    const [showDelete, setShowDelete] = useState(false)
    const handleDelete = (e) => {
        e.preventDefault();
        setShowDelete(true)
    }


    if (userId === comment.user_id) {
        if (showEdit) {
            return (
                <div className="edit-comment-div">

                    <form className="" onSubmit={handleSubmitEdit}>
                        <textarea
                            placeholder={comment.comment}
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
                    <div>{comment.comment}</div>
                    <p> - {comment.user_details.username}</p>
                    <div className="user-comment-change-div">
                        <i onClick={handleEdit} className="fas fa-pencil-alt"></i>
                        <i onClick={handleDelete} className="fas fa-trash-alt"></i>
                    </div>
                    {showDelete && <DeleteComment commentId={comment.id} showDeleteModal={showDelete} setShowDeleteModal={setShowDelete} />}
                </li>
            )
        }
    } else {
        return (
            <li className="comments-list-item">
                {comment.comment}
                <p> - {comment.user_details.username}</p>
            </li>
        );

    }

};

export default SingleComment;
