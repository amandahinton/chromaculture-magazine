import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Modal } from '../../context/Modal.js';
import { deleteComment } from '../../store/comments';

function DeleteCommentModal({ commentId, showDeleteModal, setShowDeleteModal }) {

    const history = useHistory()
    const dispatch = useDispatch()

    const { articleId } = useParams();

    const handleDelete = async (e) => {
        e.preventDefault();
        setShowDeleteModal(false)
        await dispatch(deleteComment(commentId))
        history.push(`/articles/${articleId}`)
    }

    return (
        <>
            {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                    <div className="delete-comment-confirm">
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
