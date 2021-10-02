import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./experienceCardComponent.css";

function ExperienceCardComponent(props) {
  return (
    <div className="card-body card mb-3">
      <div className="card-body-content">
        <span className="card-span BebasNeue">
          {props.data.date.inicio} - {props.data.date.final}
        </span>
        <div className="card-img-container">
          <img
            src={props.data.img}
            className="card-img lateral-padding img-fluid rounded-start"
            alt={props.data.name + " logo"}
          />
        </div>
      </div>
      <div className="card-margin">
        <div className="d-flex justify-content-between text-align-flex-end">
          <h5 className="card-title BebasNeue">{props.data.name}</h5>
          {props.data.socialNetworks.map((socialNetwork) => {
            switch (socialNetwork.name) {
              case "linkedin":
                return (
                  <a
                    key={socialNetwork.name}
                    href={socialNetwork.url}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="social-network-icon-cards lateral-padding"
                    />
                  </a>
                );
              case "github":
                return (
                  <a
                    key={socialNetwork.name}
                    href={socialNetwork.url}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="social-network-icon-cards lateral-padding"
                    />
                  </a>
                );
              case "twitter":
                return (
                  <a
                    key={socialNetwork.name}
                    href={socialNetwork.url}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="social-network-icon-cards lateral-padding"
                    />
                  </a>
                );
              case "instagram":
                return (
                  <a
                    key={socialNetwork.name}
                    href={socialNetwork.url}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="social-network-icon-cards lateral-padding"
                    />
                  </a>
                );
              default:
                return null;
            }
          })}
        </div>
        <p className="card-text lateral-padding text-break NotoSans">
          {props.data.resume}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCardComponent;
