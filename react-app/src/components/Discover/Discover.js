import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArticleAll from "../Articles/ArticleAll.js";
import { getOurArticles } from '../../store/articles';
import "./discover.css"

function Discover() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOurArticles())
    }, [dispatch])

    const articles = useSelector(state => Object.values(state.articles)).reverse()

    return (
        <div className="discover-container">
            <div className="discover-article-intro">
                <p>Chromaculture is a digital magazine with an inspiring collection of stories from around the web about palettes, pigments, and projects that are color-related. We blend color theory, art history, industry information, and pop culture in a way that is modern, informative, provocative, and playful. </p>
            </div>
            <div className="discover-article-div">
                <h2 className="discover-article-title">browse articles</h2>
                <ArticleAll articles={articles} />
            </div>
        </div>
    );
}
export default Discover;
