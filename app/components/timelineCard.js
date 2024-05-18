import Badge from './badge';

export default function TimelineCard({ item, index, experienceLength }) {
    return (
        <li className={index % 2 === 1 ? "timeline-inverted" : ""}>
            <div className={item.endDate == 'Present' ? "timeline-image timeline-image-green" : "timeline-image"}>
            </div>
            <div className="timeline-panel">
                <div >
                    <h3 className='font-semibold text-xl'>
                        {item.company}
                    </h3>
                    <h4>
                        {item.position}
                    </h4>
                    <h5 className='mt-1 text-sm text-neutral-400'>
                        {new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(item.startDate)) + " " + new Date(item.startDate).getFullYear()} - {item.endDate !== 'Present' ? new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(item.endDate)) + " " + new Date(item.endDate).getFullYear() : "Present"} · {Math.round((new Date(item.endDate == "Present" ? new Date() : item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24 * 30))} mos
                    </h5>
                    <h5 className='text-sm text-neutral-400'>
                        {item.location}
                    </h5>
                </div>
                <div className="mt-2">
                    <p className='font-light'>{item.description}</p>
                </div>
                <div className='flex flex-wrap'>
                    {item.skills.map((skill, index) => {
                        return (
                            <Badge skill={skill} />
                        )
                    })}
                </div>
                <div className={index % 2 === 1 ? "triangle-inverted" : "triangle"}></div>
            </div>
            <div className={index !== experienceLength - 1 ? "line" : ""}></div>
        </li>
    )
}
