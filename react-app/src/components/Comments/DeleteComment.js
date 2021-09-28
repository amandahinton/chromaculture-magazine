import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Modal } from '../../context/Modal.js';
import { deleteComment, readComments } from '../../store/comments';

function DeleteCommentModal({ comment, showDeleteModal, setShowDeleteModal }) {

    const history = useHistory()
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault();
        setShowDeleteModal(false)
        await dispatch(deleteComment(comment))
        dispatch(readComments())
        history.push(`/articles/${comment.article_id}`)

    }

    return (
        <>
            {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                    <div className="delete-comment-verify-popup">
                        <h3 className="delete-verify-text" >Ready to delete your comment?</h3>
                        <div className="delete-verify-buttons-div">
                            <button className="secondary-button delete-comment-confirm-button" onClick={handleDelete}>Confirm</button>
                            <button className="secondary-button delete-comment-cancel-button" onClick={() => setShowDeleteModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
            )
            }
        </>
    );
}

export default DeleteCommentModal;
