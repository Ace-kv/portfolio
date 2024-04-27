import Link from "next/link"
import { Github } from "./icons/icons"

export default function Projects ({ data }: { data: {
    id: string,
    title: string,
    projects: {projectName: string, description: string, skills: string[], link: string}[]
} }) {
    const {id, title, projects} = data

    return (
        <section>
            <h2 className="mb-6 font-bold">{title}</h2>
            <div className="flex flex-col gap-9">
                {projects.map(({projectName, description, skills, link}, i) => (
                    <div key={`${id}_project_${i}`} className="p-6 rounded-lg bg-gray-100 shadow-md">
                        <div className="font-semibold flex items-center justify-between">
                            <h3>{projectName}</h3> 
                            {/* <Link 
                                href={link} 
                                aria-label={`${projectName} GitHub link`}
                                rel="noopener noreferrer"
                                target="_blank">
                                Open Repository <span className="inline-block text-lg align-middle ml-0.5"><Github /></span>
                            </Link> */}
                        </div>
                        <p className="mt-3 mb-3">{description}</p>
                        <ul className="mt-6 flex flex-row flex-wrap gap-3">
                            {skills.map((skill, i) => (
                                <li key={`${id}_skill_${i}`} className="bg-[#1C1F26] text-white text-sm px-3.5 py-1 rounded-3xl">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                        <button className="border-solid border-2 border-[#1C1F26] rounded-md mt-8 px-5 py-2
                                           transition ease-in-out duration-200 hover:bg-[#1C1F26] hover:text-[#FCBF49] hover:scale-110">   
                            <Link 
                                href={link} 
                                aria-label={`${projectName} GitHub link`}
                                rel="noopener noreferrer"
                                target="_blank">
                                Open Repository <span className="inline-block text-lg align-middle ml-0.5"><Github /></span>
                            </Link>
                        </button>
                        {/* <ul className="mt-6 flex flex-row flex-wrap gap-3">
                            {skills.map((skill, i) => (
                                <li key={`${id}_skill_${i}`} className="bg-[#1C1F26] text-white text-sm px-3.5 py-1 rounded-3xl">
                                    {skill}
                                </li>
                            ))}
                        </ul> */}
                    </div>
                ))}
            </div>
        </section>
        
    )
}