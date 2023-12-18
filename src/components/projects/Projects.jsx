import { ProjectCard } from "../ProjectCard/ProjectCard"
import "./projects.scss"

export function Projects() {
    return (
        <>
        <h2 className="projects-title">Mes Projets</h2>
        <div id="projects">
            <ProjectCard 
                title="Projet Ohmyfood" 
                img="../src/assets/images/ohmyfood.png" 
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                linkgithub="https://github.com/NeikaLehlo/P4-OhMyFood"
                link= "https://neikalehlo.github.io/P4-OhMyFood/"
            />
            <ProjectCard 
                title="Projet Sophie Bluel" 
                img="../src/assets/images/sophie-bluel.png" 
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                linkgithub="https://github.com/NeikaLehlo/P6-Portfolio_Sophie_Bluel"
            />
            <ProjectCard 
                title="Projet Kasa" 
                img="../src/assets/images/kasa.png" 
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                linkgithub="https://github.com/NeikaLehlo/P8-Kasa"
            />
            <ProjectCard 
                title="Projet Argent Bank" 
                img="../src/assets/images/ArgentBank.png" 
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                linkgithub="https://github.com/NeikaLehlo/P11-ArgentBank"
            />
        </div>
        </>
    )
}