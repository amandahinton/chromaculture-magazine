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
            <p>Chromaculture is for artists, designers, and those obsessed with all things color! Stop by to see the latest articles we've gathered, and log in to bookmark your favorites and join us in the comments section.</p>
            </div>
            <div className="discover-article-div">
                <h2 className="discover-article-title">browse articles</h2>
                <ArticleAll articles={articles} />
            </div>
        </div>
    );
}
export default Discover;
