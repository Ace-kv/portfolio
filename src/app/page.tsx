import { aboutMe, projectData } from "../../data/page-data";
import AboutMe from "../components/about-me";
import Projects from "../components/projects";

export default function Page () {
  return (
    <div>
      <AboutMe data={aboutMe} />
      <Projects data={projectData}/>
    </div>
  )
}