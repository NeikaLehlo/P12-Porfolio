import { ProjectCard } from "../ProjectCard/ProjectCard"
import "./projects.scss"

export function Projects() {
    return (
        <>
            <h2 className="projects-title">Mes Projets</h2>
            <div id="projects">
                <ProjectCard 
                    title="Projet Ohmyfood" 
                    img="/assets/images/ohmyfood.png" 
                    desc="Dans le cadre d'une simulation pour ma formation, j'ai créé un site gastronomique pour Ohmyfood en utilisant HTML et Sass . Adoptant une approche 'mobile first', le site propose aux utilisateurs la composition personnalisée de menus, intégrant des réservations et des animations pour une expérience utilisateur optimale."
                    linkgithub="https://github.com/NeikaLehlo/P4-OhMyFood"
                    link= "https://neikalehlo.github.io/P4-OhMyFood/"
                />
                <ProjectCard 
                    title="Projet Sophie Bluel" 
                    img="/assets/images/sophie-bluel.png" 
                    desc="Dans le cadre d'une simulation pour ma formation, j'ai contribué en tant que développeur front-end au projet de conception du site portfolio pour une architecte d'intérieur. En utilisant HTML, CSS, JavaScript, et Swagger pour le back-end, j'ai créé la page de présentation des travaux de l'architecte à partir du HTML fourni, développé la page de connexion de l'administrateur de zéro, et mis en place une modale d'upload de nouveaux médias." 
                    linkgithub="https://github.com/NeikaLehlo/P6-Portfolio_Sophie_Bluel"
                />
                <ProjectCard 
                    title="Projet Kasa" 
                    img="/assets/images/kasa.png" 
                    desc="Dans le cadre d'une simulation pour ma formation, j'ai été recruté par Kasa pour contribuer à la refonte de sa plateforme de location d'appartements entre particuliers. Sous la direction de Laura, la CTO, j'ai démarré le projet React en créant l'ensemble de l'application, notamment les composants React, les routes avec React Router, et en assurant la responsivité conforme aux maquettes Figma fournies par Paul, le designer. Malgré l'absence du back-end, j'ai intégré les 20 dernières annonces de logements à partir d'un fichier JSON pour construire le front-end."
                    linkgithub="https://github.com/NeikaLehlo/P8-Kasa"
                />
                <ProjectCard 
                    title="Projet Argent Bank" 
                    img="/assets/images/ArgentBank.png" 
                    desc="Dans le cadre d'une simulation pour ma formation, j'ai contribué à la mise en place du tableau de bord des utilisateurs chez Argent Bank en utilisant React, Redux, Sass, et Swagger. La phase 1 du projet a impliqué la création d'une application web réactive avec des fonctionnalités d'authentification, gestion du state avec Redux, et intégration de bonnes pratiques de Green Code. La phase 2 a exigé la modélisation des routes API pour les transactions, offrant aux utilisateurs des fonctionnalités avancées telles que la visualisation, l'édition et la suppression de notes sur les transactions." 
                    linkgithub="https://github.com/NeikaLehlo/P11-ArgentBank"
                />
            </div>
        </>
    )
}