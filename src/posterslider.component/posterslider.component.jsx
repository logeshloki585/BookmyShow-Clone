import React from 'react'
import Slider from 'react-slick';


//component
import Poster from "../Poster/poster.component.jsx"


//confid
import postersettings from "../../config/PosterCarousel.config";


const  posterslider = (props) => {
    return (
        <>
             <div className="flex flex-col  items-start">
                <h3 className="text-white text-xl font-bold">
                {props.title}
                </h3>
                <p className="text-white text-sm">{props.disc}</p>
             </div>

             <Slider {...postersettings}>
                {props.images.map((image) => (
                <Poster {...image} isDark/>
                ))}        
            </Slider>
            
        </>
    )
}

export default posterslider;