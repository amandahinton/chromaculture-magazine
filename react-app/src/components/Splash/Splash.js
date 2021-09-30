import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    console.log("ARTICLES ----->>>", articles)


    return (
        <div className="splash-container">

            <div className="splash-text">
                <h1 className="splash-title">Welcome to Chromaculture!</h1>
                <h2 className="splash-subtitle">The Digital Magazine for Color Lovers</h2>
                <h3 className="splash-description">Our inspiring collection of stories from around the web about palettes, pigments, and color-related projects will take you to surprising places in the spectrum! Chromaculture blends color theory, science, art history, industry information, and pop culture in a way that is modern, informative, provocative, and playful. </h3>
            </div>




            <NavLink exact to="/articles/16" className="splash-main-feature-div">
            <div className="main-feature-detail-text">
                    <h3 className="main-feature-title">{articles[15].title}</h3>
                    <p className="main-feature-byline">{articles[15].author}  |  {articles[15].source}</p>
                    <div className="main-feature-modal-button">
                        <ArticleDetailModal article={articles[15]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
                    </div>
                </div>

            </NavLink>



            <div className="splash-highlight-div">
                <NavLink exact to="/articles/15" className="splash-article-highlight-one">
                    <h3 className="splash-highlight-title">{articles[14].title}</h3>
                    <p className="splash-highlight-byline">{articles[14].author}  |  {articles[14].source}</p>
                    <p className="splash-highlight-description">{articles[14].description}</p>
                </NavLink>

                <img className="splash-highlight-image" src="https://images.unsplash.com/photo-1502691876148-a84978e59af8" alt="colorful walkway" />

                <img className="splash-highlight-image" src="https://images.unsplash.com/photo-1600832331197-ad575931911b" alt="fanned pantone cards" />

                <NavLink exact to="/articles/1" className="splash-article-highlight-two">
                    <h3 className="splash-highlight-title">{articles[0].title}</h3>
                    <p className="splash-highlight-byline">{articles[0].author}  |  {articles[0].source}</p>
                    <p className="splash-highlight-description">{articles[0].description}</p>
                    <p className="splash-highlight-source"></p>
                </NavLink>
            </div>






            <ul className="splash-cards-div">
                <ArticleCard className="splash-card" article={articles[6]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
            </ul>

            <ul className="splash-cards-div">
                <ArticleCard className="splash-card" article={articles[9]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
            </ul>

            <ul className="splash-cards-div">
                <ArticleCard className="splash-card" article={articles[11]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
            </ul>

            <ul className="splash-cards-div">
                <ArticleCard className="splash-card" article={articles[12]} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
            </ul>


            <div className="splash-image-grid">

                <img className="splash-image" src="https://images.unsplash.com/photo-1520207756688-175b32d0917d" alt="pink lightbulb" />

                <img className="splash-image" src="https://images.unsplash.com/photo-1596798647070-c015ec23610d" alt="flamingo feathers" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1516478784322-0b77268e6c64" alt="candy sprinkles" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b" alt="dirty paintbrushes" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1534287610067-865f1f2ad7e5" alt="blue door" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1565793388498-6eb52f629afe" alt="spraypainted rotary phone" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1623929147453-b0abf89a9363" alt="coral reef" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1509652839609-d94a8ad572db" alt="spilled ink" />
            </div>

        </div>
    );



}

export default Splash;
