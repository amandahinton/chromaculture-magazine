import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllArticles } from '../../store/articles';
import { getUserBookmarks, postUserBookmark, deleteUserBookmark } from '../../store/bookmarks';
import "./articles.css"


const ArticlePage = () => {

    const dispatch = useDispatch()

    const { articleId } = useParams();
    const articles = useSelector(state => state?.articles)
    const article = articles[articleId];

    const user = useSelector(state => state?.session.user)

    const allBookmarks = useSelector(state => Object.values(state?.bookmarks))
    const currentBookmark = allBookmarks.filter(bookmark => +articleId === +bookmark.article_id && +user.id === +bookmark.user_id)[0]

    useEffect(() => {
        dispatch(getAllArticles())
        dispatch(getUserBookmarks(user.id))
    }, [dispatch, user.id])

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
            <div className="article-container">
                <div className="bookmark-div">
                    {bookmarkIcon}
                </div>
                <div className="article-page-info">
                    <h1 className="article-page-title">{article.title}</h1>
                    <img className="article-page-image" src={article.image_url} alt="article preview" />
                    <p className="article-page-author">{article.author}</p>
                    <p className="article-page-source">{article.source}</p>
                    <p className="article-page-savers">{(article.saver_list).length} bookmarked</p>
                    <p className="article-page-description">{article.description}</p>

                    <div className="article-page-quote-div">
                        <i className="fas fa-quote-left"></i>
                        <p className="article-page-quote">{article.quote}</p>
                        <i className="fas fa-quote-right"></i>
                    </div>

                    <a href={article.link_url} className="article-page-external-link" target={"_blank"} rel={"noreferrer"}>read full article</a>
                </div>

                <div className="article-page-comment-section">
                    <h3>Comments</h3>
                    <p>not real comments</p>
                    <p>not real comments</p>
                    <p>not real comments</p>
                    {/* <CommentsList />
                    <CommentForm /> */}
                </div>
            </div>
        );
    } else {
        return null
    }
};

export default ArticlePage;
