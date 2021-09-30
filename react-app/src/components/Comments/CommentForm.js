import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { readComments, createComment } from '../../store/comments';
import './comments.css'

const CommentForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { articleId } = useParams();

    const user = useSelector(state => state.session.user)
    const { id: userId } = user

    const [content, setContent] = useState('')
    const [validationErrors, setValidationErrors] = useState([])


    useEffect(() => {
        const errors = [];
        let trimContent = content.trim()
        if (trimContent.length > 500) errors.push("comment must be 1-500 characters in length")
        setValidationErrors(errors)
    }, [content])

    const reset = () => {
        setContent('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = []
        let trimContent = content.trim()
        if (trimContent.length < 1) {
            errors.push("cannot post a blank comment")
            setValidationErrors(errors)
            return
        }

        if (validationErrors > 0) return;
        const payload = {
            userId,
            articleId,
            content:content.trim()
        }

        let newComment = await dispatch(createComment(payload))
        if (newComment) {
            reset()
            dispatch(readComments());
            history.push(`/articles/${articleId}`)
        }
    }

    return (
        <div className="comment-form-container">
            <form className="comment-form-div" onSubmit={handleSubmit}>
                <textarea
                    className='comment-field'
                    placeholder="What did you think?"
                    name="content"
                    value={content}
                    rows="3"
                    onChange={(e) => setContent(e.target.value)}
                />
                <button
                    className='comment-submit-button'
                    type="submit"
                    disabled={validationErrors.length > 0 || content.length < 1}
                >
                    <i className="fas fa-comment comment-submit-icon"></i>
                </button>
            </form>
            <div className="comment-errors">
                {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
            </div>

        </div>
    )
}

export default CommentForm
