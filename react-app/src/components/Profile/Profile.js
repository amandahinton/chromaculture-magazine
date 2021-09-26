import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllArticles } from '../../store/articles';
import { getUserBookmarks } from '../../store/bookmarks';
import ArticleAll from "../Articles/ArticleAll.js";
import './profile.css'

function Profile() {

    const dispatch = useDispatch()

    const [paramUser, setParamUser] = useState({});
    const { userId }  = useParams();

    const sessionUser = useSelector(state => state?.session.user);

    useEffect(() => {
        if (!userId) return;

        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setParamUser(user);
        })();
    }, [userId]);

    useEffect(()=>{
        dispatch(getUserBookmarks(sessionUser.id))
        // dispatch(getAllArticles())
    }, [dispatch, sessionUser.id])

    const bookmarks = useSelector(state => Object.values(state.bookmarks))

    let articles = []
    for (let bookmark of bookmarks) articles.push(bookmark.article)

    if (!sessionUser) return null;

    return (
        <div className="user-profile-container">
            <div className="profile-bio-div">
                <div className="profile-bio-text">
                    <div><strong>Username: </strong> {paramUser.username}</div>
                    <div><strong>Email: </strong> {paramUser.email}</div>
                    <div><strong>Favorite Color: </strong> {paramUser.favorite_color}</div>
                </div>
            </div>
            <div className="profile-bookmark-div">
                <h2 className="profile-bookmarks-title">my bookmarks</h2>
                <ArticleAll articles={articles} />
            </div>
        </div>
    );
}
export default Profile;
