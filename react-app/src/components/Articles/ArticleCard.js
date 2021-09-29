import React from 'react';
import ArticleDetailModal from './ArticleDetailModal/index.js';
import "./articles.css"

const ArticleCard= ({ article, showArticleModal, setShowArticleModal }) => {

    return (
        <li className="article-card">

            {/* <div className="article-card-body"> */}
                <img className="article-card-image" src={article.image_url} alt="article preview" />
                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-card-description">{article.description}</p>
                <div className="article-card-modal-button">
                    <ArticleDetailModal article={article} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
                </div>
            {/* </div> */}

        </li>
    );
};

export default ArticleCard;
