import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../Users/LogoutButton';
import LoginFormModal from '../Users/LoginFormModal';
import RegisterFormModal from '../Users/RegisterFormModal';
import NavLogo from '../../images/chromaculture-02.png'
import './nav.css';

const NavBar = () => {

    const user = useSelector(state => state.session.user)

    if (user) {
        return (
            <nav>
                <div className="left-nav-div">
                    <NavLink exact to="/">
                        <img
                        className="navbar-logo"
                        src={NavLogo}
                        alt="Chromaculture logo" />
                    </NavLink>
                </div>
                <div className="right-nav-div">
                    <div className="navbar-link">
                        <NavLink
                            className="navbar-link-text"
                            to={`/users/${user.id}`}
                            activeClassName='active'
                            activeStyle={{ borderBottom: "2px solid var(--pink)" }}>
                            Bookmarks
                        </NavLink>
                    </div>
                    <div className="navbar-link">
                        <NavLink
                            className="navbar-link-text"
                            exact to='/discover'
                            activeClassName='active'
                            activeStyle={{ borderBottom: "2px solid var(--pink)" }}>
                            Discover
                        </NavLink>
                    </div>
                    <LogoutButton />
                </div>

            </nav>
        );
    } else {
        return (
            <nav>
                <div className="left-nav-div">
                    <NavLink exact to="/">
                        <img className="navbar-logo"
                        src={NavLogo}
                        alt="Chromaculture logo" />
                    </NavLink>
                </div>
                <div className="right-nav-div">
                    <div className="navbar-link">
                        <NavLink
                            className="navbar-link-text"
                            exact to='/discover'
                            activeClassName='active'
                            activeStyle={{ borderBottom: "2px solid var(--pink)" }}>
                            Discover
                        </NavLink>
                    </div>
                    <div>
                        <LoginFormModal />
                    </div>
                    <div>
                        <RegisterFormModal />
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
