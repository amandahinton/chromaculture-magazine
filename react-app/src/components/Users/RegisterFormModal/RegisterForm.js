import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { register, login } from '../../../store/session';
// import { fetchUsers } from '../../../store/users';

const RegisterForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  // username='GambogeGuest',
  // email='demo@aa.io',
  // password='password',

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
  };

  // const onRegister = async (e) => {
  //   e.preventDefault();
  //   const data = await dispatch(Register(username, email, password, repeatPassword));
  //   dispatch(fetchUsers())
  //   if (data) {
  //     setErrors(data)
  //   }
  // };

  const onRegister = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(register(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="modal-wrapper-div">
      <form className="form-div" onSubmit={onRegister}>
        <div className='form-errors'>
          {errors.map((error, ind) => (<div key={ind}>{error}</div>))}
        </div>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='username'
          onChange={updateUsername}
          value={username}
        ></input>
        <input
        className='form-input'
          type='text'
          name='email'
          placeholder='email address'
          onChange={updateEmail}
          value={email}
        ></input>
        <input
        className='form-input'
          type='password'
          name='password'
          placeholder='password'
          onChange={updatePassword}
          value={password}
        ></input>
        <input
          className='form-input'
          type='password'
          name='repeat_password'
          placeholder='confirm password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
        <button className="primary-button form-submit" type='submit'>Register</button>
      </form>
      <div className="demo-user-div">
        <p className="demo-user-prompt">Log in as a guest user to see sample bookmarks</p>
        <button className="secondary-button" onClick={demoLogin}>
          Try Demo
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
