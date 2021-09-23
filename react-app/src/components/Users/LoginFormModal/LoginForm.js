import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../../store/session';

const LoginForm = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const history = useHistory();

    const demoLogin = (e) => {
        e.preventDefault();
        dispatch(login("demo@aa.io", "password"));
        history.push("/users/2");
    };

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) { setErrors(data) };
        history.push("/discover");
    };

    const updateEmail = (e) => { setEmail(e.target.value) };
    const updatePassword = (e) => { setPassword(e.target.value) };

    if (user) { return <Redirect to={`/users/${user.id}`} /> };

    return (
        <div className="modal-wrapper-div">
            <form className="form-div" onSubmit={onLogin}>

                <label className="formLabel">
                    email
                    <input
                    className='form-input'
                    name='email'
                    type='text'
                    placeholder='email address'
                    value={email}
                    onChange={updateEmail}
                    />
                </label>

                <label className="formLabel">
                    password
                    <input
                        className='form-input'
                        name='password'
                        placeholder='password'
                        type='password'
                        value={password}
                        onChange={updatePassword}
                    />
                </label>

                <div className='form-errors'>
                    {errors.map((error, ind) => (<div key={ind}>{error}</div>))}
                </div>

                <button className="primary-button form-submit" type="submit">
                    Log In
                </button>
            </form>

            <div className="demo-user-div">
                <p className="demo-user-text">
                    Sign in as a guest to try all features
                </p>
                <button className="secondary-button demo-login" onClick={demoLogin}>
                    Demo
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
