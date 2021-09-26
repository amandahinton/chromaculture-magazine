import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentsList from '../Comments/CommentsList.js';
import ArticleContent from './ArticleContent.js'
import { getAllArticles } from '../../store/articles';
import "./articles.css"


const ArticlePage = () => {

    const dispatch = useDispatch()

    const { articleId } = useParams();
    const articles = useSelector(state => state?.articles)
    const article = articles[articleId];

    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch])


    if (article) {
        return (
            <div className="article-container">
                <ArticleContent articleId= {articleId} />

                <div className="article-page-comment-section">
                    <CommentsList />
                </div>
            </div>
        );
    } else {
        return null
    }
};

export default ArticlePage;
