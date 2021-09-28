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

    if (article) {
        return (
            <div className="modal-wrapper-div article-modal-container">
                <div className="close-button-div">
                    <i onClick={closeOverlay} className="fas fa-window-close"></i>
                </div>
                <ArticleContent article={article} />
            </div>
        );
    } else {
        return null
    }
};

export default ArticleDetail;
