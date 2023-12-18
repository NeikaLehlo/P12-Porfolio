import "./skill.scss"

export function Skill({img, name}) {
    return (
        <div className="skill">
            <img src={img} alt={name}></img>
            <p>{name}</p>
        </div>
    )
}