import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Philophobia Publishing newsletter to keep up!
                </p>
                <p className="footer-description-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeHolder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-link">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">Media</Link>
                        <Link to="/">Music</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Shop</Link>
                        <Link to="/">Join The Team!</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                        <img src="images/PhiloPubLogoWhite.png" alt="Logo" className="logo"/>
                        </Link>
                    </div>
                    <small className="website-rights">Philophobia Publishing Inc. ©2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
