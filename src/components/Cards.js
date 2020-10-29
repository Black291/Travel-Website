import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out the epic destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="travel/amsterdam-5367020_1920.jpg"
                        text="Explore the hidden waterfall deep inside the amazon Jungle"
                        label="Adventure"
                        path='/services' 
                        />
                        <CardItem
                        src="travel/amsterdam-5367020_1920.jpg"
                        text="Travel to Amsterdam"
                        label="Luxury" 
                        path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="travel/old-1130742_1920.jpg"
                        text="Explore the hidden waterfall deep inside the amazon Jungle"
                        label="Adventure"
                        path="/services" />
                        <CardItem
                        src="travel/amsterdam-5367020_1920.jpg"
                        text="Travel to Amsterdam"
                        label="Luxury" 
                        path="/services" />
                         <CardItem
                        src="travel/amsterdam-5367020_1920.jpg"
                        text="Travel to Amsterdam"
                        label="Luxury" 
                        path="/services" />
                    </ul>
                    {/* <ul className="cards__items">
                        <CardItem
                        src="travel/old-1130742_1920.jpg"
                        text="Explore the hidden waterfall deep inside the amazon Jungle"
                        label="Adventure"
                        path="/services" />
                        <CardItem
                        src="travel/amsterdam-5367020_1920.jpg"
                        text="Travel to Amsterdam"
                        label="Luxury" 
                        path="/services" />
                    </ul> */}
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
