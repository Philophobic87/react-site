import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className="hero-container">
            {/* <video src="/videos/P1080782.mp4" autoPlay loop muted /> */}
            <h1>PHILOPHOBIA PUBLISHING INC.</h1>
            <p>Where Creativity Thrives</p>
            <div className="hero-btns">
                <Button className="btns" 
                buttonStyle="btn--outline"
                buttonSize="btn--large">EXPLORE</Button>
                <Button className="btns" 
                buttonStyle="btn--primary"
                buttonSize="btn--large">WATCH TRAILER <i className="far fa-play-circle" /></Button>
            </div>
        </div>
    )
}

export default HeroSection
