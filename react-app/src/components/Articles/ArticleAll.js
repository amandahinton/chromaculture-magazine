import React, {useState, useEffect} from 'react';
import ArticleCard from './ArticleCard.js';
import "./articles.css"

function ArticleAll({articles}) {
    const [showArticleModal, setShowArticleModal] = useState(null);

    // if there is an article that matches the one stored in showArticleModal, modal is open and background shouldn't scroll
    useEffect(() => {

        if (showArticleModal && articles.some((article) => article.id ===showArticleModal.id)) {
          document.querySelector("body").style.overflow = 'hidden';
        } else {
          document.querySelector("body").style.overflow = 'visible';
        }
      }, [articles, showArticleModal]);


    return (
        <ul className="article-grid">
            {articles && articles?.map((article) => {
                return <ArticleCard key={article.id} article={article} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />;
            })}
        </ul>
    );
};

export default ArticleAll;
