import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Nav.css';

function Navigation() {
  const addLine = (e) => {
    e.target.classList.toggle('click');
  };
  return (
    <section className="header-navigation">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="proj-name">Space Traveler`s Hub</h1>
      </div>
      <ul className="navigation">
        <li><button className="rockets" type="button" onClick={addLine}><Link className="navigation-item" to="/">Rockets</Link></button></li>
        <li><button className="missions" type="button" onClick={addLine}><Link className="navigation-item" to="/one">Missions</Link></button></li>
        <li><button className="dragons" type="button" onClick={addLine}><Link className="navigation-item" to="/one">Dragonsss</Link></button></li>
        <line className="border" />
        <li>
          <button
            className="profile"
            type="button"
            onClick={addLine}
          >
            <Link className="navigation-item" to="/two">My Profile</Link>
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
