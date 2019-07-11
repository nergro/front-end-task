import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state = {
    mobileNavOpen: false,
    mobileDropdownOpen: false
  };

  handleMobileNav = () => {
    this.setState(prevState => {
      return {
        mobileNavOpen: !this.state.mobileNavOpen
      };
    });
  };
  handleMobileDropdown = () => {
    this.setState(prevState => {
      return {
        mobileDropdownOpen: !this.state.mobileDropdownOpen
      };
    });
  };
  render() {
    const mobileNavClasses = this.state.mobileNavOpen
      ? 'mobile-nav mobile-nav-open'
      : 'mobile-nav mobile-nav-close';
    const dropdownStyles = this.state.mobileDropdownOpen
      ? { display: 'block' }
      : { display: 'none' };
    return (
      <div className='header'>
        <div className='header-top'>
          <nav className='header-top-nav'>
            <ul className='header-top-nav__items'>
              <li className='header-top-nav__item'>
                <a href='##'>MENU</a>
              </li>
              <li className='header-top-nav__item'>
                <a href='##'>SOME TEXT</a>
              </li>
              <li className='header-top-nav__item'>
                <a href='##'>ANOTHER ITEM</a>
              </li>
              <li className='header-top-nav__item'>
                <a href='##'>ONE MORE</a>
              </li>
              <li className='header-top-nav__item'>
                <a href='##'>AND LAST ONE</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='header-bottom'>
          <div className='header-bottom-wrapper'>
            <div className='header-bottom-brand'>
              <a href='##'>
                <span className='highlighted'>DEMO</span>
                <span className='regular'>SITE</span>
              </a>
            </div>
            <button className='toggle-button' onClick={this.handleMobileNav}>
              <span className='toggle-button__bar' />
              <span className='toggle-button__bar' />
              <span className='toggle-button__bar' />
            </button>
            <nav className='header-bottom-nav'>
              <ul className='header-bottom-nav__items'>
                <li className='header-bottom-nav__item'>
                  <a href='##'>HOME</a>
                </li>
                <li className='header-bottom-nav__item'>
                  <a href='##'>SERVICE</a>
                </li>
                <li className='header-bottom-nav__item header-dropdown'>
                  <a href='##'>WORKS</a>
                  <div className='header-dropdown-content'>
                    <div className='arrow-up' />
                    <ul className='header-dropdown__list'>
                      <li className='header-dropdown-list__item'>
                        <a href='##'>ALL</a>
                      </li>
                      <li className='header-dropdown-list__item'>
                        <a href='##'>GRAPHIC</a>
                      </li>
                      <li className='header-dropdown-list__item'>
                        <a href='##'>DESIGN</a>
                      </li>
                      <li className='header-dropdown-list__item'>
                        <a href='##'>LOGO</a>
                      </li>
                      <li className='header-dropdown-list__item'>
                        <a href='##'>WEBSITE</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='header-bottom-nav__item'>
                  <a href='##'>ABOUT ME</a>
                </li>
                <li className='header-bottom-nav__item'>
                  <a href='##'>CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav className={mobileNavClasses}>
            <ul className='mobile-nav__items'>
              <li className='mobile-nav__item'>
                <a href='##'>HOME</a>
              </li>
              <li className='mobile-nav__item'>
                <a href='##'>SERVICE</a>
              </li>
              <li
                className='mobile-nav__item'
                onClick={this.handleMobileDropdown}
              >
                <a href='##'>WORKS</a>
              </li>
              <div className='mobile-dropdown' style={dropdownStyles}>
                <div className='arrow-up-mobile' />
                <div className='mobile-dropdown-content'>
                  <ul className='mobile-dropdown__list'>
                    <li className='mobile-dropdown-list__item'>
                      <a href='##'>ALL</a>
                    </li>
                    <li className='mobile-dropdown-list__item'>
                      <a href='##'>GRAPHIC</a>
                    </li>
                    <li className='mobile-dropdown-list__item'>
                      <a href='##'>DESIGN</a>
                    </li>
                    <li className='mobile-dropdown-list__item'>
                      <a href='##'>LOGO</a>
                    </li>
                    <li className='mobile-dropdown-list__item'>
                      <a href='##'>WEBSITE</a>
                    </li>
                  </ul>
                </div>
              </div>
              <li className='mobile-nav__item'>
                <a href='##'>ABOUT ME</a>
              </li>
              <li className='mobile-nav__item'>
                <a href='##'>CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
