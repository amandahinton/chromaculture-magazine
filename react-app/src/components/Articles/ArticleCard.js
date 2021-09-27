import React from 'react';
import ArticleDetailModal from './ArticleDetailModal/index.js';
import "./articles.css"

const ArticleCard= ({ article, showArticleModal, setShowArticleModal }) => {

    return (
        <li className="article-card">
            <img className="article-card-image" src={article.image_url} alt="article preview" />
            <div className="article-card-body">
                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-card-description">{article.description}</p>
                <ArticleDetailModal article={article} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
            </div>

        </li>
    );
};

export default ArticleCard;
