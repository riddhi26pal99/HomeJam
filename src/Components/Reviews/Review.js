import React from 'react'
import "./Review.css"
import ReviewCard from './ReviewCard'
import {reviews} from "../../Data/ReviewData"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Review() {
    return (
        <div>
            <div className="reviewCards__header">
                <h1>Reviews<div className="underline"></div>
                </h1>
                <div className="review__Left">
                <p>1<span>/12</span></p>
                    <div className="arrow">
                        <ArrowBackIcon/>
                        <ArrowForwardIcon />
                    </div>
                </div>
            </div>

            <div className="reviewCards__container">
                { reviews?.map((item) => {
                    const { id, name, review, location, flag, avatar } = item;
                    return(
                        <ReviewCard key={id} name={name} location={location} review={review} flag={flag} avatar={avatar} />
                    )
                })}
            </div>

        </div>
    )
}

export default Review
