import {React,useEffect,useState} from "react";
import ExperienceCardComponent from "./experienceCardComponent/experienceCardComponent";
import "./experienceComponent.css";

function ExperienceComponent() {
    const url = 'https://portfolio-back-heroku.herokuapp.com/api/experience/getExperience';
    const [experience,setExperience] = useState([]);
    const [filter, setFilter] = useState('');
    const getExperience = async () => {
        const response = await fetch(url);
        const experienceData = await response.json();
        setExperience(experienceData);
    }
    useEffect(() => {
        getExperience()
    },[])
    return (
        <section className="experience-container">
            <div className="experience-container--text">
                <h3 className="BebasNeue" >EXPERIENCIA</h3>
            </div>
            {experience.map((item) => {
                return (<ExperienceCardComponent key={item.name} data={item}/>)
            })}
        </section>
    )
};

export default ExperienceComponent;