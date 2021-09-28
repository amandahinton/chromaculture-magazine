import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { readComments, createComment } from '../../store/comments';

const CommentForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { articleId } = useParams();

    const user = useSelector(state => state.session.user)
    const { id: userId } = user

    const [content, setContent] = useState('')

    // const [validationErrors, setValidationErrors] = useState([])
    // useEffect(() => {
    //     const errors = [];
    //     if (comment.length === 0) errors.push("Please leave a comment")
    //     setValidationErrors(errors)
    // }, [comment])

    const reset = () => {
        setContent('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            userId,
            articleId,
            content
        }

        let newComment = await dispatch(createComment(payload))
        if (newComment) {
            reset()
            dispatch(readComments());
            history.push(`/articles/${articleId}`)
        }
    }

    return (
        <form className="form-div" onSubmit={handleSubmit}>
                <textarea
                    placeholder="Add a comment"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            <button
                type="submit"
                // disabled={validationErrors.length > 0}
            >
                post comment
            </button>
        </form>
    )
}

export default CommentForm
