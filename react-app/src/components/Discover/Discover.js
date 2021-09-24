import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleAll from "../Articles/ArticleAll.js";
import { getOurArticles } from '../../store/articles';

import "./discover.css"

function Discover() {

    const dispatch = useDispatch()

    // const [paramUser, setParamUser] = useState({});
    // const { userId }  = useParams();
    // const sessionUser = useSelector(state => state?.session.user);

    useEffect(()=>{
        dispatch(getOurArticles())
    }, [dispatch])

    const articles = useSelector(state => Object.values(state.articles))

    return (
        <div>
            <div className="discover-feature-div">
                <h1>Cool feature section</h1>
            </div>
            <ArticleAll articles={articles} />
        </div>

    );
}
export default Discover;
