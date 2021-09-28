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
                    <div className="delete-comment-confirm">
                        <p className="delete-comment-text" >Ready to delete your comment?</p>
                        <button className="secondary-button" onClick={handleDelete}>Confirm</button>
                        <button className="secondary-button" onClick={() => setShowDeleteModal(false)}>
                            Cancel
                        </button>
                    </div>
                </Modal>
            )
            }
        </>
    );
}

export default DeleteCommentModal;
