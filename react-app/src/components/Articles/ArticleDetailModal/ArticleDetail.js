import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllArticles } from '../../../store/articles';
import ArticleContent from'../ArticleContent.js'
import "../articles.css"

const ArticleDetail = ({article, setShowArticleModal}) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state?.session.user)

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
                <div className="modal-header">
                    {user ? <div className="comments-link-on-modal">
                        <a href={articlePage} className="secondary-link-as-button">comments <i className="fas fa-comment"></i></a>
                    </div> : <div className="comments-link-on-modal"></div>}
                    <div className="close-button-div">
                        <i onClick={closeOverlay} className="fas fa-window-close close-modal-x"></i>
                    </div>
                </div>

                <ArticleContent article={article} />
            </div>
        );
    } else {
        return null
    }
};

export default ArticleDetail;
