import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProtectedRoute from './components/Users/ProtectedRoute';
import LoginForm from './components/Users/LoginFormModal/LoginForm';
import RegisterForm from './components/Users/RegisterFormModal/RegisterForm';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Navigation/Footer';
import Splash from './components/Splash/Splash.js';
import Profile from './components/Profile/Profile';
import Discover from './components/Discover/Discover.js';
import ArticlePage from './components/Articles/ArticlePage.js';
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
                <Switch>
                    <Route path='/login' exact={true}>
                        <LoginForm />
                    </Route>

                    <Route path='/register' exact={true}>
                        <RegisterForm />
                    </Route>

                    <Route path='/discover' exact={true}>
                        <div className="page-container">
                            <Discover />
                        </div>
                    </Route>

                    <ProtectedRoute path='/users/:userId' exact={true} >
                        <div className="profile-container">
                            <div className="page-container">
                                <Profile />
                            </div>
                        </div>
                    </ProtectedRoute>

                    <ProtectedRoute path='/articles/:articleId' exact={true} >
                        <div className="page-container">
                            <ArticlePage />
                        </div>
                    </ProtectedRoute>

                    {/* <ProtectedRoute path='/users/:userId/articles' exact={true} >
                        <h1>User Articles</h1>
                        <h3>articles that a user has created</h3>
                    </ProtectedRoute> */}

                    <Route path='/' exact={true} >
                        <Splash />
                    </Route>
                </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
