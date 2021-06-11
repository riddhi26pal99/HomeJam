import React from 'react'
import Cards from './Cards'
import {data} from "../../Data/Data"

import "./UpcomingShows.css"

function UpcomingShow() {
    console.log(data);

    return (
        <div>
            <div className="card__header">
                <h1>Upcoming Show <div className="underline"></div>
                </h1>
                <p>View All</p>
            </div>
            <div className="cards__container">
                {   data?.map( ({ id, name, type, picture }) => {
                    return (
                        <Cards key={id} id={id} name={name} type={type} picture={picture} />
                    )
                })}
            </div>
        </div>
    )
}

export default UpcomingShow
