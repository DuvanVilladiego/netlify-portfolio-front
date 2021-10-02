/* eslint-disable react/jsx-no-target-blank */
import {React, useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./profileComponent.css";

function ProfileComponent() {
  const url = 'https://portfolio-back-heroku.herokuapp.com/api/profile/getProfile'
  const [name, setName] = useState();
  const [img, setImg] = useState("");
  const [resume, setResume] = useState("");
  const [socialNetworks, setSocialNetworks] = useState([]);
  const getUserData = async () => {
    const response = await fetch(url);
    const userData = await response.json();
    setName(userData.name);
    setImg(userData.img);
    setResume(userData.resume);
    setSocialNetworks(userData.socialNetworks);
  }
  useEffect(() => {
    getUserData();
  },[]) 
  return (
    <section className="d-flex">
      <div className="profile-container --profile-normalizer">
        <div className="profile-container--content">
          <img className="img-ajust" src={img} alt="Profile piture of Duvan Villadiego" />
          <div className="profile-container--networks">
            {socialNetworks.map((socialNetwork) => {
              switch (socialNetwork.name) {
                case "linkedin":
                  return (<a key={socialNetwork.name} href={socialNetwork.url} target="_blank"><FontAwesomeIcon icon={faLinkedin} className="social-network-icon" /></a>);
                case "github":
                  return (<a key={socialNetwork.name} href={socialNetwork.url} target="_blank"><FontAwesomeIcon icon={faGithub} className="social-network-icon" /></a>);
                case "twitter":
                  return (<a key={socialNetwork.name} href={socialNetwork.url} target="_blank"><FontAwesomeIcon icon={faTwitter} className="social-network-icon" /></a>);
                case "instagram":
                  return (<a key={socialNetwork.name} href={socialNetwork.url} target="_blank"><FontAwesomeIcon icon={faInstagram} className="social-network-icon" /></a>);
                default:
                  return null;
                } 
              
              })}
          </div>
        </div>
        <div className="profile-container--content">
          <h3>{name}</h3>
          <p className="text-break">{resume}</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileComponent;
