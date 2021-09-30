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

    // article controls for previous and next
    const allArticleIds = Object.keys(articles).map(stringId => +stringId);
    const currentArticleIndex = allArticleIds.indexOf(+articleId)

    const previousArticleId = allArticleIds[currentArticleIndex - 1]
    const previousArticle = `/articles/${previousArticleId}`
    let previousControl
    if (previousArticleId) {
        previousControl = (
            <div className="article-previous-div">
                <a href={previousArticle} className="secondary-link-as-button" ><i className="fas fa-angle-double-left"></i> previous article</a>
            </div>
        )
    } else {
        previousControl = (
            <></>
        )
    }

    let nextControl
    const nextArticleId = allArticleIds[currentArticleIndex + 1]
    const nextArticle = `/articles/${nextArticleId}`
    if (nextArticleId) {
        nextControl = (
            <div className="article-next-div">
                <a href={nextArticle} className="secondary-link-as-button" >next article <i className="fas fa-angle-double-right"></i></a>
            </div>
        )
    } else {
        nextControl = (
            <></>
        )
    }

    if (article) {
        return (
            <div className="article-page-container">
                <div className="article-controls-div">
                    {previousControl}
                    {nextControl}
                </div>

                <div className="article-page-content-div">
                    <div className="article-page-article-div">
                        <ArticleContent article={article} />
                    </div>
                    <div className="article-page-comment-div">
                        <CommentsList articleId={articleId} />
                    </div>
                </div>
            </div>
        );
    } else {
        return null
    }
};

export default ArticlePage;
