import React from "react";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <img src={props.imageUrl} alt="" className="card-img" />
        <div className="card-content">
          <div className="card-country">
            <img
              src="landmark.png"
              alt="landmark icon"
              className="card-mark-icon"
            />
            <span className="country-name">{props.location.toUpperCase()}</span>
            <a href={props.googleMapsUrl} className="country-map-link">
              View on Google Maps
            </a>
          </div>
          <div className="card-head-box">
            <h1 className="card-heading">{props.title}</h1>
          </div>
          <div className="card-details">
            <span id="card-start-date">{`${props.startDate} -`}</span>
            <span id="card-end-date">{props.endDate}</span>
          </div>
          <p className="card-desc">{props.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Card;
