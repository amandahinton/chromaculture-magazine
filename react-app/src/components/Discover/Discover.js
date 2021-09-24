import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleAll from "../Articles/ArticleAll.js";
import { getOurArticles } from '../../store/articles';
import "./discover.css"

function Discover() {

    const dispatch = useDispatch()

    // const [user, setUser] = useState({});
    const [paramUser, setParamUser] = useState({});
    const { userId }  = useParams();
    // const users = useSelector(state => Object.values(state?.users))
    const sessionUser = useSelector(state => state?.session.user);
    // const profileOwner = users?.filter(user => +userId === +sessionUser.id)[0]

    useEffect(()=>{
        dispatch(getOurArticles())
    }, [dispatch])

    const articles = useSelector(state => Object.values(state.articles))
    // const userArticles = articles.filter((article) => article.user_id === +userId)

    useEffect(() => {
        if (!userId) return;

        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setParamUser(user);
        })();
    }, [userId]);

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
