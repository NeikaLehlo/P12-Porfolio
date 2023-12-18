import { Skill } from "../skill/Skill"
import "./skills.scss"

export function Skills() {
    return(
        <div className="skills">
            <h2 className="skills-title">Mes compétences</h2>
            <div className="skills-icons">
                <Skill
                    img="../src/assets/icons/html.png"
                    name="HTML"
                />
                <Skill
                    img="../src/assets/icons/css.png"
                    name="CSS"
                />
                <Skill
                    img="../src/assets/icons/js.png"
                    name="Javascript"
                />
                <Skill
                    img="../src/assets/icons/sass.png"
                    name="Sass"
                />
                <Skill
                    img="../src/assets/icons/react.png"
                    name="React"
                />
                <Skill
                    img="../src/assets/icons/redux.png"
                    name="Redux"
                />
                <Skill
                    img="../src/assets/icons/swagger.png"
                    name="Swagger"
                />
            </div>
        </div>
    )
}