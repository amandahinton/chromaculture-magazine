import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    }, [dispatch, sessionUser.id])

    const bookmarks = useSelector(state => Object.values(state.bookmarks)).reverse()

    let articles = []
    for (let bookmark of bookmarks) articles.push(bookmark.article)

    let profileView
    if (articles.length < 1) {
        profileView = (
            <div className="new-user-div">
                <h1 className="new-user-title">We love hue!</h1>
                <h2 className="new-user-instructions">Welcome to your page - let's fill it up. Visit the <a href="/discover">discover</a> feed to browse our carefully curated selection of articles about color, then select "read more" to open the article preview.</h2>
                <h3>Click the blue bookmark in the top left corner of the article preview to save it to this page, which you can access by clicking "bookmarks" in the navigation bar. Click again to remove the bookmark. Read other people's reactions and share your thoughts by clicking the "comments" button in the top left of the article preview.</h3>
            </div>
        )
    } else {
        profileView = (
            <div className="profile-bookmark-div">
                <h2 className="profile-bookmarks-title">my bookmarks</h2>
                <ArticleAll articles={articles} />
            </div>
        )
    }

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
            <div>
                {profileView}
            </div>

        </div>
    );
}
export default Profile;
