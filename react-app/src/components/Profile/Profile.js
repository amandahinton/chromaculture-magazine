import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function Profile() {

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

    if (!sessionUser) return null;

    return (
        <div>
            <div className="user-bio-div">
                <div><strong>Username: </strong> {paramUser.username}</div>
                <div><strong>Email: </strong> {paramUser.email}</div>
                <div><strong>Favorite Color: </strong> {paramUser.favorite_color}</div>
            </div>
        </div>
    );
}
export default Profile;
