import React from 'react';
import ArticleCard from './ArticleCard.js';
import "./articles.css"

function ArticleAll({articles}) {

    return (
        <ul className="article-grid">
            {articles && articles?.map((article) => {
                return <ArticleCard key={article.id} article={article} />;
            })}
        </ul>
    );
};

export default ArticleAll;
