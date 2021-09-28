import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getAllArticles } from '../../../store/articles';
import ArticleContent from'../ArticleContent.js'
import "../articles.css"

const ArticleDetail = ({article, setShowArticleModal}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch])

    const closeOverlay = () => {
        setShowArticleModal(null)
    }

    const articlePage = `/articles/${article.id}`

    if (article) {
        return (
            <div className="modal-wrapper-div article-modal-container">
                <div className="close-button-div">
                    <i onClick={closeOverlay} className="fas fa-window-close close-modal-x"></i>
                </div>
                <ArticleContent article={article} />
                <div className="comments-link-on-modal">
                    {/* <button
                        className="secondary-button"
                        onclick={articlePage}
                    >
                        comments <i className="fas fa-comment"></i>
                    </button> */}
                    <a href={articlePage} className="secondary-link-as-button">comments <i className="fas fa-comment"></i></a>
                </div>
            </div>
        );
    } else {
        return null
    }
};

export default ArticleDetail;
