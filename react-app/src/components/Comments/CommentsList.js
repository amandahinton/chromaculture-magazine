import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { readComments } from '../../store/comments';
import CommentForm from './CommentForm'
import SingleComment from './SingleComment'
import "./comments.css"

function CommentsList({ articleId }) {
    const dispatch = useDispatch()

    const allComments = useSelector(state => Object.values(state?.comments))

    console.log(allComments, "LOOOOOOOKK");

    const articleComments = allComments.filter(comment => +comment.article_id === +articleId)

    useEffect(() => {
        dispatch(readComments())
    }, [dispatch])

    return (
        <div className="comments-list-container">
            <h3>Comments</h3>
            <div className="article-page-comment-form-div">
                <CommentForm />
            </div>

            <ul className="comments-list">
                {articleComments && articleComments?.map((comment) => {
                    return <SingleComment key={comment?.id} comment={comment} />;
                })}
            </ul>
        </div>
    );
}

export default CommentsList;
