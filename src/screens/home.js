import { React } from "react";
import ProfileComponent from "../components/profileComponent/profileComponent.jsx";
import SkillsComponent from "../components/skillsComponent/skillsComponent.jsx";
import ExperienceComponent from "../components/experienceComponent/experienceComponent.jsx";

function HomeScreen() {
  return (
    <main>
      <ProfileComponent />
      <SkillsComponent />
      <ExperienceComponent />
    </main>
  );
}

export default HomeScreen;
