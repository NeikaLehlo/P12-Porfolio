import { useState } from "react"
import "./projectCard.scss"

export function ProjectCard({title, img, desc, linkgithub, link}) {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="project">
            <div className="project-card" onClick={openModal}>
                <h3>{title}</h3>
                <img src={img} alt="project's picture"></img>    
            </div>

            {(isOpen) && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-project">
                        {/* <div className="modal-project-title"> */}
                            <h3>{title}</h3>
                            {/* <img className="modal-close" src="./src/assets/icons/close.png" alt="close"></img> */}
                        {/* </div> */}
                        <div className="modal-project-text">
                            <img src={img} alt="project's picture"></img>
                            <div className="modal-project-text-desc">
                                <p>{desc}</p>
                                <div className="modal-project-text-desc-links">
                                    <a className="red" href={linkgithub} target="_blank">Github</a>
                                    {(link) &&(
                                        <a className="red" href={link} target="_blank">Site Web</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}