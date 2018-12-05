import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/darko-logo.png'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapsed: true
    }
  }

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }

  render(){
    return(
      <nav className="navbar is-light is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="Darko" style={{ width: '200px'}} />
            </Link>
            <button className="navbar-burger button is-info" data-target="navMenu" aria-label="menu" aria-expanded="false"
              onClick = {this._onToggleNav}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className={(this.state.navCollapsed ? '' : 'is-active') + ' navbar-menu'}>
            <div className="navbar-start">
              
            </div>
            <div className="navbar-end">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <a
                className="navbar-item"
                href="https://github.com/DarkoArnautov/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


