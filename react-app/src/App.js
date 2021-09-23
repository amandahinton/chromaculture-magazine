import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProtectedRoute from './components/Users/ProtectedRoute';
import LoginForm from './components/Users/LoginFormModal/LoginForm';
import RegisterForm from './components/Users/RegisterFormModal/RegisterForm';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Navigation/Footer';
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
                        <RegisterForm />
                    </Route>

                    <Route path='/discover' exact={true}>
                        <h1>Discover Page</h1>
                        <h3>will be full of articles</h3>
                        <h3>same as users/1/articles</h3>
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
