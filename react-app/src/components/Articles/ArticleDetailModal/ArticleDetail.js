import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllArticles } from '../../../store/articles';
import ArticleContent from'../ArticleContent.js'
import "../articles.css"

const ArticleDetail = ({articleId, setShowModal}) => {

    const dispatch = useDispatch()

    const articles = useSelector(state => state?.articles)
    const article = articles[articleId];

    document.querySelector("body").style.overflow = 'hidden';

    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch])

    const closeOverlay = () => {
        setShowModal(false)
        document.querySelector("body").style.overflow = 'visible';
    }

    if (article) {
        return (
            <div className="modal-wrapper-div article-wrapper">
                <div className="article-detail-info">
                    <div className="close-button-div">
                        <i onClick={closeOverlay} className="far fa-window-close"></i>
                    </div>
                    <ArticleContent articleId={articleId} />
                </div>
            </div>
        );
    } else {
        return null
    }
};

export default ArticleDetail;
