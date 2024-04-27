import Skills from "./skills"
import { skills } from "../../data/page-data"

export default function AboutMe ({data}: {
    data: {
    id: string
    title: string,
    body: string[]
    }
}) {
    const {id, title, body} = data
    return (
        <section>
            <h2 className="mb-6 font-bold">{title}</h2>
            {body?.map((el, i) => {
                return <p key={`${id}_${i + 1}_${i}`} className="mb-6">{el}</p>  // can use just the () to implicitly return the p tag
            })}
            <Skills data={skills}/>
        </section>
    )
    
}