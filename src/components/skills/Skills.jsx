import { Skill } from "../skill/Skill"
import "./skills.scss"

export function Skills() {
    return(
        <div className="skills">
            <h2 className="skills-title">Mes compétences</h2>
            <div className="skills-icons">
                <Skill
                    img="/assets/icons/html.png"
                    name="HTML"
                />
                <Skill
                    img="/assets/icons/css.png"
                    name="CSS"
                />
                <Skill
                    img="/assets/icons/js.png"
                    name="Javascript"
                />
                <Skill
                    img="/assets/icons/sass.png"
                    name="Sass"
                />
                <Skill
                    img="/assets/icons/react.png"
                    name="React"
                />
                <Skill
                    img="/assets/icons/redux.png"
                    name="Redux"
                />
                <Skill
                    img="/assets/icons/swagger.png"
                    name="Swagger"
                />
            </div>
        </div>
    )
}