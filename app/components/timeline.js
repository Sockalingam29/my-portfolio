import '../styles/components/card.css'
import { experience } from '../assets/data/experience.json'
import TimelineCard from './timelineCard'

export default function Timeline() {
    return (
        <div className='md:mx-auto md:max-w-[80%] lg:max-w-[100%]'>
            <ul className="timeline">
                {experience.map((item, index) => {
                    return (
                        <TimelineCard item={item} index={index} experienceLength={experience.length} />
                    )
                })}

            </ul>
        </div>

    )
}
