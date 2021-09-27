import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getAllArticles } from '../../store/articles';
import { getUserBookmarks, postUserBookmark, deleteUserBookmark } from '../../store/bookmarks';
import "./articles.css"


const ArticleContent = ({article}) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state?.session.user)

    const allBookmarks = useSelector(state => Object.values(state?.bookmarks))
    const currentBookmark = allBookmarks.filter(bookmark => +article.id === +bookmark.article_id && +user.id === +bookmark.user_id)[0]

    useEffect(() => {
        dispatch(getAllArticles())
        if (user) dispatch(getUserBookmarks(user.id))
    }, [dispatch, user])

    // if bookmark icon is clicked (shows full after click)
    const handleSave = async () => {
        await dispatch(postUserBookmark({ "user_id": user.id, "article_id": article.id }))
        await dispatch(getUserBookmarks(user.id))
        await dispatch(getAllArticles())
        return
    }

    // if bookmark icon is clicked again (shows empty after click)
    const handleUnsave = async () => {
        await dispatch(deleteUserBookmark(article.id, currentBookmark.id))
        await dispatch(getUserBookmarks(user.id))
        await dispatch(getAllArticles())
        return
    }

    // select icon (full or empty bookmark) to show
    let bookmarkIcon
    if (article && user) {
        if (!article.saver_list.includes(user.id)) {
            bookmarkIcon = (<i onClick={handleSave} className="far fa-bookmark"></i>)
        } else {
            bookmarkIcon = (<i onClick={handleUnsave} className="fas fa-bookmark"></i>)
        }
    }


    if (article) {
        return (
            <div className="article-content-container">
                <div className="bookmark-div">
                    {bookmarkIcon}
                </div>
                <div className="article-info">
                    <h1 className="article-title">{article.title}</h1>
                    <img className="article-image" src={article.image_url} alt="article preview" />
                    <p className="article-author">{article.author}</p>
                    <p className="article-source">{article.source}</p>
                    <p className="article-savers">{(article.saver_list).length} bookmarked</p>
                    <p className="article-description">{article.description}</p>

                    <div className="article-quote-div">
                        <i className="fas fa-quote-left"></i>
                        <p className="article-quote">{article.quote}</p>
                        <i className="fas fa-quote-right"></i>
                    </div>

                    <a href={article.link_url} className="article-external-link" target={"_blank"} rel={"noreferrer"}>read full article</a>
                </div>

            </div>
        );
    } else {
        return null
    }
};

export default ArticleContent;
