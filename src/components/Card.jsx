import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <img
        className="card-container-img"
        src={props.item.imageUrl}
        alt={props.item.alt}
      />
      <div className="card-container-content">
        <img
          className="card-container-location-img"
          src="./public/img/location.png"
          alt="location-img"
        />
        <span className="card-container-location">{props.item.location}</span>
        <span className="card-container-views">
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </span>
        <div>
          <h1 className="card-container-title bold">{props.item.title}</h1>
          <h2 className="card-container-date bold">
            {props.item.startDate} - {props.item.endDate}
          </h2>
          <p className="card-container-paragraph">{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
