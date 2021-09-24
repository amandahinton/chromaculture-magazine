import React from 'react';
import ArticleDetailModal from './ArticleDetailModal/index.js';
import "./articles.css"

const ArticleDetail = ({ article }) => {

    return (
        <li className="article-card">
            <img className="article-card-image" src={article.image_url} alt="article preview" />
            <h3 className="article-card-title">{article.title}</h3>
            <p className="article-card-description">{article.description}</p>
            <ArticleDetailModal articleId={article.id} />
        </li>
    );
};

export default ArticleDetail;
