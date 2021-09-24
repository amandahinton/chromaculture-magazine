import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllArticles } from '../../../store/articles';
// import CommentsList from '../Comments/CommentsList.js'
// import CommentForm from "../Comments/CommentForm";
// import { addBookmark, getBookmarks, removeBookmark } from "../../store/bookmarks";
import "../articles.css"

const ArticleDetail = () => {

    const dispatch = useDispatch()

    const { articleId } = useParams();
    const articles = useSelector(state => state?.articles)
    const article = articles[articleId];

    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch])

    if (article) {
        return (
            <div className="article-detail-container">
                <div className="article-detail-info">
                    <img className="article-card-image" src={article.image_url} alt="article preview" />
                    <h3 className="article-card-title">{article.title}</h3>
                    <p className="article-card-author">{article.author}</p>
                    <p className="article-card-source">{article.source}</p>
                    <p className="article-card-description">{article.description}</p>
                    <div className="article-detail-quote-div">
                        <i className="fas fa-quote-left"></i>
                        <p className="article-card-quote">{article.quote}</p>
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <a href={article.link_url} className="article-detail-external-link" target={"_blank"} rel={"noreferrer"}>go to article</a>
                </div>

                <div className="article-detail-comment-section">
                    {/* <CommentsList />
                    <CommentForm /> */}
                </div>
            </div>
        );
    } else {
        return null
    }
};

export default ArticleDetail;
