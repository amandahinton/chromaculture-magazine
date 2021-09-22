import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/Users/LoginFormModal/LoginForm';
import SignUpForm from './components/Users/SignUpFormModal/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Navigation/Footer';
import ProtectedRoute from './components/Users/ProtectedRoute';
import Bookmarks from './components/Users/Bookmarks';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
        <BrowserRouter>
        <NavBar />
            <div className="page-container">
                <Switch>
                    <Route path='/login' exact={true}>
                        <LoginForm />
                    </Route>

                    <Route path='/register' exact={true}>
                        <SignUpForm />
                    </Route>

                    <ProtectedRoute path='/users/:userId' exact={true} >
                        <Bookmarks />
                    </ProtectedRoute>

                    <Route path='/' exact={true} >
                        <h1>Welcome to Chromaculture!</h1>
                        <h3>the digital magazine for color lovers</h3>
                    </Route>
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
