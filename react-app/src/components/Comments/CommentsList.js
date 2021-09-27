import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { readComments } from '../../store/comments';
import SingleComment from './SingleComment'
import "./comments.css"

function CommentsList() {

    const dispatch = useDispatch()

    const { articleId } = useParams();
    const allComments = useSelector(state => Object.values(state?.comments))
    const articleComments = allComments.filter(comment => +comment.article_id === +articleId)

    useEffect(() => {
        dispatch(readComments())
    }, [dispatch])

    return (
        <div className="comments-list-container">
            <h3>Comments</h3>
            <ul className="comments-list">
                {articleComments && articleComments?.map((comment) => {
                    return <SingleComment key={comment?.id} comment={comment} />;
                })}
            </ul>
        </div>
    );
}

export default CommentsList;
