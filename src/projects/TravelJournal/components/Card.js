import React from "react"

export default function Card(props){
    const { location, place, date, imgSrc, description } = props;
    return (
        <>
            <div className="card">
                <img src={imgSrc} alt={place} />
                <div className="card--info">
                    <div className="info--top">
                        <i className="fa-solid fa-location-dot"></i>
                        <small className="card--loc">{location}</small>
                        <small className="card--maps">View on Google Maps</small>
                    </div>
                    <h4 className="card--place">{place}</h4>
                    <h5 className="card--date">{date}</h5>
                    <p className="card--desc">{description}</p>
                </div>  
            </div>
        </>
        
        
        
    )
}