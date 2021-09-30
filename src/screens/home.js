import { React } from "react";
import ProfileComponent from "../components/profileComponent/profileComponent.jsx";
import SkillsComponent from "../components/skillsComponent/skillsComponent.jsx";

function HomeScreen() {
  return (
    <main>
      <ProfileComponent />
      <SkillsComponent />
    </main>
  );
}

export default HomeScreen;
