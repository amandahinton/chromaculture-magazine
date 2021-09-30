import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import ArticleCard from '../Articles/ArticleCard';
import ArticleDetailModal from '../Articles/ArticleDetailModal/index.js';
import "./splash.css"

function Splash( {articles} ) {

    const [showArticleModal, setShowArticleModal] = useState(null);
    useEffect(() => {
        if (showArticleModal && articles.some((article) => article.id ===showArticleModal.id)) {
          document.querySelector("body").style.overflow = 'hidden';
        } else {
          document.querySelector("body").style.overflow = 'visible';
        }
      }, [articles, showArticleModal]);

    return (
        <div className="splash-container">

            <div className="splash-main-feature-div">
            <div className="main-feature-detail-text">
                    <h3 className="main-feature-title">{articles[15].title}</h3>
                    <p className="main-feature-byline">{articles[15].author}  |  {articles[15].source}</p>
                    <div className="main-feature-modal-button">
                        <ArticleDetailModal article={articles[15]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
                    </div>
                </div>
            </div>

            <div className="splash-highlight-div">

                <div onClick={() => setShowArticleModal(articles[14])} className="splash-highlight-one clickable-div">
                    <h3 className="splash-highlight-title">{articles[14].title}</h3>
                    <p className="splash-highlight-byline">{articles[14].author}  |  {articles[14].source}</p>
                    <p className="splash-highlight-description">{articles[14].description}</p>
                </div>
                <ArticleDetailModal hideButton={true} article={articles[14]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />


                <img className="splash-highlight-image" src="https://images.unsplash.com/photo-1502691876148-a84978e59af8" alt="colorful walkway" />

                <img className="splash-highlight-image" src="https://images.unsplash.com/photo-1600832331197-ad575931911b" alt="fanned pantone cards" />

                <div onClick={() => setShowArticleModal(articles[0])}  className="splash-highlight-two clickable-div">
                    <h3 className="splash-highlight-title">{articles[0].title}</h3>
                    <p className="splash-highlight-byline">{articles[0].author}  |  {articles[0].source}</p>
                    <p className="splash-highlight-description">{articles[0].description}</p>
                    <p className="splash-highlight-source"></p>
                </div>
                <ArticleDetailModal hideButton={true} article={articles[0]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />


            </div>

            <div className="splash-description-div">
                <h1 className="splash-title">Welcome to Chromaculture!</h1>
                <h2 className="splash-subtitle">The Digital Magazine for Color Lovers</h2>
                <p className="splash-description">Our inspiring collection of stories from around the web about palettes, pigments, and color-related projects will take you to surprising places in the spectrum. Chromaculture blends color theory, science, art history, industry information, and pop culture in a way that is modern, informative, provocative, and playful.</p>
            </div>

            <div className="splash-cards-container">

                <div className="splash-cards-duo">
                <ul className="splash-cards-div">
                    <ArticleCard className="splash-card" article={articles[6]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
                </ul>

                <img className="splash-midcard-image" src="https://images.unsplash.com/photo-1520207756688-175b32d0917d" alt="pink lightbulb" />
                </div>

                <div className="splash-cards-duo">
                <ul className="splash-cards-div">
                    <ArticleCard className="splash-card" article={articles[9]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
                </ul>

                <img className="splash-midcard-image" src="https://images.unsplash.com/photo-1509652839609-d94a8ad572db" alt="spilled ink" />
                </div>

                <div className="splash-cards-duo">
                <img className="splash-midcard-image" src="https://images.unsplash.com/photo-1596798647070-c015ec23610d" alt="flamingo feathers" />

                <ul className="splash-cards-div">
                    <ArticleCard className="splash-card" article={articles[11]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
                </ul>
                </div>

                <div className="splash-cards-duo">
                <img className="splash-midcard-image" src="https://images.unsplash.com/photo-1565793388498-6eb52f629afe" alt="spraypainted rotary phone" />

                <ul className="splash-cards-div">
                    <ArticleCard className="splash-card" article={articles[12]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Splash;
