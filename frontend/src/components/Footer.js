import React from 'react'
import '../styles/Footer.css'
// import {Link} from 'react-router-dom'
import logo from '../images/Logo.png'

const Footer = () => {
    return(
        <footer id = 'footer-container' className = 'footer-container'>
            <div className = 'wrapper'>
                <div className = 'footer-infor'>
                    <div className = 'footer-logo'>
                    <div className = 'navbar-logo logo-footer'>
                      <img src = {logo} className = 'logo' alt = 'Logo' />
                      FinnTa
                    </div>
                    
                        {/* <Link to = '/' className = 'navbar-logo logo-footer'>
                            <img src = {logo} className = 'logo' alt = 'Logo' />
                            FinnTa 
                        </Link> */}
                    </div>
                    <p>FinnTa is a 3D Fashion Virtualizer Platform. A outfit visualizer and media platform to connect fashionaholics and shops</p>
                    <div className = 'social-media'>
                        {/* <Link 
                        to = '/' 
                        className = 'social-icon-link facebook' 
                        target = '_blank' 
                        aria-label = 'Facebook' 
                        >
                            <i className = 'fab fa-facebook-f'></i>
                        </Link>*/}
                    </div>
                    <small className = 'website-rights'>©2020 FinnTa Policy</small>
                </div>
                <div className = 'footer-links'>
                    <div className = 'footer-link-wrapper'>
                        <div className = 'footer-link-items'>
                            <h2>About Us</h2>
                            <a href="#">Intro</a>
                            <a href="#">Blog</a>
                            <a href="#">FAQ</a>
                            <a href="#">Tutorials</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>

                            {/* <Link to = '/'>Download</Link>
                            <Link to = '/'>Blog</Link> */}
                        </div>
                        <div className = 'footer-link-items'>
                            <h2>Home</h2>
                            <a href="">Trending Items</a>
                            <a href="">Collection</a>

                        </div>
                        <div className = 'footer-link-items'>
                            <h2>Virtual Fitting</h2>
                            <a href="">Wish list</a>
                            <a href="">Closet</a>
                            <a href="">Outfit of the day</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer