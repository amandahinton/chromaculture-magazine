import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllArticles } from '../../store/articles';
import "./articles.css"


const ArticlePage = () => {

    const dispatch = useDispatch()

    const { articleId } = useParams();

    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch])

    const articles = useSelector(state => state?.articles)
    const article = articles[articleId];


    if (article) {
        return (
            <div className="article-container">
                <div className="article-page-info">
                    <img className="article-page-image" src={article.image_url} alt="article preview" />
                    <h2 className="article-page-title">{article.title}</h2>
                    <p className="article-page-author">{article.author}</p>
                    <p className="article-page-source">{article.source}</p>
                    <p className="article-page-savers">{(article.saver_list).length} bookmarked</p>
                    <p className="article-page-description">{article.description}</p>

                    <div className="article-page-quote-div">
                        <i className="fas fa-quote-left"></i>
                        <p className="article-page-quote">{article.quote}</p>
                        <i className="fas fa-quote-right"></i>
                    </div>

                    <a href={article.link_url} className="article-page-external-link" target={"_blank"} rel={"noreferrer"}>go to article</a>
                </div>

                <div className="article-page-comment-section">
                    {/* <CommentsList />
                    <CommentForm /> */}
                </div>
            </div>
        );
    } else {
        return null
    }
};

export default ArticlePage;
