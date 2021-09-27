import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { register, login } from '../../../store/session';
import "../users.css"
// import { fetchUsers } from '../../../store/users';

const RegisterForm = () => {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const history = useHistory();

    const demoLogin = (e) => {
        e.preventDefault();
        dispatch(login("demo@aa.io", "password"));
        history.push("/users/2");
    };

    // const onRegister = async (e) => {
    //   e.preventDefault();
    //   const data = await dispatch(Register(username, email, favoriteColor, password, confirmPassword));
    //   if (data) setErrors(data)
    //   dispatch(fetchUsers())
    // };

    const onRegister = async (e) => {
        e.preventDefault();
        const data = await dispatch(register(username, email, favoriteColor, password, confirmPassword));
        if (data) { setErrors(data) }
        if (!data) history.push("/discover");
    };

    const updateUsername = (e) => { setUsername(e.target.value) };
    const updateEmail = (e) => { setEmail(e.target.value) };
    const updateFavoriteColor = (e) => { setFavoriteColor(e.target.value) };
    const updatePassword = (e) => { setPassword(e.target.value) };
    const updateConfirmPassword = (e) => { setConfirmPassword(e.target.value) };

    if (user) { return <Redirect to={`/users/${user.id}`} /> };

    return (
        <div className="modal-wrapper-div register-wrapper">
            <form className="form-div" onSubmit={onRegister}>

                <div className='form-errors'>
                    {errors.map((error, ind) => (<div key={ind}>{error}</div>))}
                </div>

                <label className="formLabel">
                    username
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange={updateUsername}
                        value={username}
                    ></input>
                </label>

                <label className="formLabel">
                    email
                    <input
                        className='form-input'
                        type='text'
                        name='email'
                        placeholder='email address'
                        onChange={updateEmail}
                        value={email}
                    ></input>
                </label>

                <label className="formLabel">
                    color
                    <input
                        className='form-input'
                        type='text'
                        name='favorite_color'
                        placeholder='favorite color'
                        onChange={updateFavoriteColor}
                        value={favoriteColor}
                    ></input>
                </label>

                <label className="formLabel">
                    password
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={updatePassword}
                        value={password}
                    ></input>
                </label>

                <label className="formLabel">
                    password
                    <input
                        className='form-input'
                        type='password'
                        name='confirm_password'
                        placeholder='confirm password'
                        onChange={updateConfirmPassword}
                        value={confirmPassword}
                        required={true}
                    ></input>
                </label>

                <button
                    className="primary-button form-submit"
                    type="submit">
                    Register
                </button>
            </form>

            <div className="demo-user-div">
                <p className="demo-user-text">
                    Sign in as a guest to try all features
                </p>
                <button className="secondary-button demo-register" onClick={demoLogin}>
                    Demo
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;
