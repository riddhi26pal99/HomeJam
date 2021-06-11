import React from 'react'
import Element from './DashBoard/Element'
import './HeroSlider.css'
import {dashboardData} from "../../Data/DashboardData"


function HeroSlider() {
    return (
        <div className="hero__slider">
            <section className="about_text">
                <h1>Cari Cari</h1>
                <p>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
            </section>

            <div className="dashboard__style">
                {dashboardData?.map((data, index) => {
                    const {icon, count, label} = data;
                    return(
                        <Element key={index} id={index} icon={icon} count={count} label={label} />
                    )
                })}
            </div>
             
        </div>
    )
}

export default HeroSlider
