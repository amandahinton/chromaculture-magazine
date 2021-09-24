import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../../context/Modal';
import { getAllArticles } from '../../../store/articles';
// import CommentsList from '../Comments/CommentsList.js'
// import CommentForm from "../Comments/CommentForm";
// import { addBookmark, getBookmarks, removeBookmark } from "../../store/bookmarks";
import "../articles.css"

const ArticleDetail = ({articleId, setShowModal}) => {

    const dispatch = useDispatch()

    const articles = useSelector(state => state?.articles)
    const article = articles[articleId];

    document.querySelector("body").style.overflow = 'hidden';
    
    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch])

    if (article) {
        return (
            <div className="modal-wrapper-div article-wrapper">
                <div className="article-detail-info">
                    <div className="close-button-div">
                        <i onClick={() => setShowModal(false)} className="far fa-window-close"></i>
                    </div>
                    <img className="article-detail-image" src={article.image_url} alt="article preview" />
                    <h3 className="article-detail-title">{article.title}</h3>
                    <p className="article-detail-author">{article.author}</p>
                    <p className="article-detail-source">{article.source}</p>
                    <p className="article-detail-savers">{(article.saver_list).length} bookmarked</p>
                    <p className="article-detail-description">{article.description}</p>
                    <div className="article-detail-quote-div">
                        <i className="fas fa-quote-left"></i>
                        <p className="article-detail-quote">{article.quote}</p>
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
