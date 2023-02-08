
export default function ProjectItem (props: { data:any }) {
     return (<div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: props.data.category.color }}>
                {props.data.category.tag}
            </span>
            <p className="projectClient">{props.data.client}</p>
            <p className="projectTitle">{props.data.title}</p>
            <time>{props.data.date}</time>
            <p style={{fontWeight:'bold'}}>{props.data.position}</p>
            <p>{props.data.text}</p>
            {props.data.link && (
                <a
                    href={props.data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>)
}
   
