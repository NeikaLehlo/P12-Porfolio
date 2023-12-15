import "./projectCard.scss"

export function ProjectCard(title, img, desc) {
    return (
        <div className="">
            <h3>{title}</h3>
            <img src={img} alt="project's picture"></img>
            <p>{desc}</p>
        </div>
    )
}