import React from 'react'
import "./ReviewCard.css"

function ReviewCard({ id, name, review, location, flag, avatar }) {
    return (
            <div className="reviewCard__wrapper">

                <div className="reviewCard__style">
                    <div className="user__info">
                        <img src={avatar} alt="avatar" />
                        <div className="user__detail">
                            <h4>{name}</h4>
                            <div className="location">
                                <img src={flag} alt="" />
                                <p>{location}</p>
                            </div>
                        </div>
                    </div>
                    <p>{review}</p>
                </div>

                <div className="reviewCard__bg"></div>
            </div>
    )
}

export default ReviewCard
