import { projectsList } from "../data"
import ProjectItem from "./ProjectItem"

export default function ProjectsTimeline () {

    return (<> {projectsList.length > 0 && (
        <>
        <h1 className="timelineHeader">2007 - Actualidad</h1>
        <div className="timeline-container">
            {projectsList.map((data, idx) => (
                <ProjectItem data={data} key={idx} />
            ))}
        </div>
        </>
    )}
    </>)
}