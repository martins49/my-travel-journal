import React from "react"

const Travel = (props) => {
    return (
        <div className="travels">
            <div>
                <img src={props.coverImg} alt="" className="location-img"></img>
            </div>
            <div className="travels-element">
                <div className="travel-location">
                    <img src="/Images/map.png" alt="" className="map-img" />

                    <span className="gray">{props.country}</span> <a href={`${props.link}`} target="_blank" rel="noreferrer"className="underline"> view on Google Map</a>
                </div>
                <h1> {props.location}</h1>
                <h4>{props.date}</h4>
                {props.description}
            </div>

        </div>
    )
}

export default Travel