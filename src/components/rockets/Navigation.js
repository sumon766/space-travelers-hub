import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Nav.css';

function Navigation() {
  return (
    <section className="header-navigation">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="proj-name">Space Traveler`s Hub</h1>
      </div>
      <ul className="navigation">
        <li><NavLink className="navigation-item" activeClassName="is-active" to="/">Rockets</NavLink></li>
        <li><NavLink className="navigation-item" activeClassName="is-active" to="/missionPage">Missions</NavLink></li>
        <li><NavLink className="navigation-item" activeClassName="is-active" to="/dragonsPage">Dragons</NavLink></li>
        <line className="border" />
        <li>
          <NavLink className="navigation-item" activeClassName="is-active" to="/profilePage">My Profile</NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
