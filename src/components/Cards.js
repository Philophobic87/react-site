import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out what's new at Philophobia Publishing Inc.!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/P1050927.jpg"
                        text="Check out the Philophobic Trailer Here!" 
                        label="Trailer"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/IMG_0322.jpg"
                        text="Check out some fire new music our Philo-Pub Playlist!" 
                        label="Music"
                        path="/services"
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="images/P1020866.jpg"
                        text="Just my thoughts..." 
                        label="Blog"
                        path="/services"
                        /> 
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/P1030691.jpg"
                        text="Buy some Philophobia Publishing merch!" 
                        label="Shop"
                        path="/products"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
