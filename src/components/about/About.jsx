import { Skill } from "../skill/Skill"
import "./about.scss"

export function About() {
    return (
        
        <div id="about">
            <img className="pfp" src="/assets/images/colibri2.jpg" alt="image de profil avec un colibri"></img>
            <div className="about-desc">
                <p>
                    Salut, je m'appelle Chloé, aka <span className="red">Neika</span>. Suite à une reconversion avec OpenClassrooms, me voila <span className="red">développeuse web !</span> Je suis <span className="red">curieuse</span> et j'aime <span className="red">apprendre</span>. J'ai une préférence pour <span className="red">React</span> et sa logique par composant.
                </p>
                <a href="https://github.com/NeikaLehlo" target="_blank">
                <Skill
                    img="/assets/icons/github.png"
                />
                </a>
            </div>
        </div>        
    )
}