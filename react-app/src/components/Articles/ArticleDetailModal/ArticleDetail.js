import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { Modal } from '../../../context/Modal';
import { getAllArticles } from '../../../store/articles';
import { getUserBookmarks, postUserBookmark, deleteUserBookmark } from '../../../store/bookmarks';
// import CommentsList from '../Comments/CommentsList.js'
// import CommentForm from "../Comments/CommentForm";
// import { addBookmark, getBookmarks, removeBookmark } from "../../store/bookmarks";
import "../articles.css"

const ArticleDetail = ({articleId, setShowModal}) => {

    const dispatch = useDispatch()

    const articles = useSelector(state => state?.articles)
    const article = articles[articleId];

    const user = useSelector(state => state?.session.user)

    const allBookmarks = useSelector(state => Object.values(state?.bookmarks))
    const currentBookmark = allBookmarks.filter(bookmark => +articleId === +bookmark.article_id && +user.id === +bookmark.user_id)[0]

    document.querySelector("body").style.overflow = 'hidden';

    useEffect(() => {
        dispatch(getAllArticles())
        dispatch(getUserBookmarks(user.id))
    }, [dispatch, user.id])

    const closeOverlay = () => {
        setShowModal(false)
        document.querySelector("body").style.overflow = 'visible';
    }

     // if bookmark icon is clicked (shows full after click)
     const handleSave = async () => {
        await dispatch(postUserBookmark({ "user_id": user.id, "article_id": articleId }))
        await dispatch(getUserBookmarks(user.id))
        await dispatch(getAllArticles())
        return
    }

    // if bookmark icon is clicked again (shows empty after click)
    const handleUnsave = async () => {
        await dispatch(deleteUserBookmark(articleId, currentBookmark.id))
        await dispatch(getUserBookmarks(user.id))
        await dispatch(getAllArticles())
        return
    }

    // select icon (full or empty bookmark) to show
    let bookmarkIcon
    if (article) {
        if (!article.saver_list.includes(user.id)) {
            bookmarkIcon = (<i onClick={handleSave} className="far fa-bookmark"></i>)
        } else {
            bookmarkIcon = (<i onClick={handleUnsave} className="fas fa-bookmark"></i>)
        }
    }

    if (article) {
        return (
            <div className="modal-wrapper-div article-wrapper">
                <div className="article-detail-info">
                    <div className="bookmark-div">
                        {bookmarkIcon}
                    </div>

                    <div className="close-button-div">
                        <i onClick={closeOverlay} className="far fa-window-close"></i>
                    </div>

                    <img className="article-detail-image" src={article.image_url} alt="article preview" />
                    <h2 className="article-detail-title">{article.title}</h2>
                    <p className="article-detail-author">{article.author}</p>
                    <p className="article-detail-source">{article.source}</p>
                    <p className="article-detail-savers">{(article.saver_list).length} bookmarked</p>
                    <p className="article-detail-description">{article.description}</p>

                    <div className="article-detail-quote-div">
                        <i className="fas fa-quote-left"></i>
                        <p className="article-detail-quote">{article.quote}</p>
                        <i className="fas fa-quote-right"></i>
                    </div>

                    <a href={article.link_url} className="article-detail-external-link" target={"_blank"} rel={"noreferrer"}>read full article</a>
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