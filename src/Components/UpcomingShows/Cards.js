import React from 'react'
import "./Cards.css"

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Ticket1 from "../../Assets/Ticket.svg"
import Ticket2 from "../../Assets/Ticket2.svg"


function Cards({ id, name, type, picture }) {
    console.log(id);
    return (
        <div className="card__wrapper" >
        
            <div className="card__style">
                <img src={picture} alt="" />
                <div className="card__details">
                    <div className="type">
                        <p>
                            {type}
                        </p>
                    </div>
                    <h1>{name}</h1>

                    <div className="more__info">
                        <div>
                            <p>More Info</p>
                            <ArrowForwardIcon />    
                        </div>

                        <div className="verticle__line"></div>
                        <img src={ id===4? Ticket1 : Ticket2 } alt="" />
                    </div>
                </div>
            </div>

            <div className="card__bg"></div>
        </div>
    )
}

export default Cards
