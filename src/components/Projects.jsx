import Image from "next/image";
import { useEffect } from "react";
import data from "../projects.json";

export default function Projects() {
    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <section className="projects" id="projects">
            <h2 className="title">Projects</h2>
            <div className="projects-grid">
                {data.map((project, index) => (
                    <div className="project-tile" key={index}>
                        <div className="project-img" style={{ width: "100%", height: "200px", display: "block", position: "relative" }}>
                            <Image src={project.img} layout="fill" objectFit="cover" />
                        </div>
                        <div className="project-info">
                            {project.tags.map(tag => (
                                <span className="tag">{tag}</span>
                            ))}
                            <h4>{project.name}</h4>
                            <p className="description">{project.description}</p>
                        </div>
                        <div className="view-buttons">
                            <a href={project.projecturl} target="_blank"><button className="btn primary" style={{ display: "inline-block", fontSize: "16px", margin: "auto" }}>View on GitHub</button></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}