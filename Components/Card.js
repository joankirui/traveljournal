import React from "react"

export default function Card(props){
     const handleClick = () => {
    window.open(props.googleMapsUrl);
  };
    return (
        <div className="card border-0">
            <img src={`../images/${props.img}`} style={{width: "125px"}} className="card-img" alt="image"/>
            <div className="card-body">
                <img src="../images/location.png" className="location-img" alt="location"/>
                <h6 className="location">{props.location.toUpperCase()}</h6>
                <a className="googleMapsUrl"><p onClick={handleClick}>View on Google Maps</p></a>
                <p className="card-title">{props.title}</p>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    )
}