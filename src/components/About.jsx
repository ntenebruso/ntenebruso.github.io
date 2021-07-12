import Image from "next/image";

export default function About() {
    return (
        <section className="about" id="about">
            <h2 className="title">About me</h2>
            <div className="about-layout">
                <div>
                    <h3>Biography</h3>
                    <p>I am currently 15 years old and I have been doing web development for three years. I mainly work on coding projects as a hobby of mine and I have always had a strong passion for programming.</p>

                    <h3>Skills</h3>
                    <p>I am experienced with the following technologies and programming languages:</p>
                    <div className="skills">
                        <div>
                            <h4>Web Technologies</h4>
                            <ul>
                                <li>HTML, CSS, and Javascript/Typescript</li>
                                <li>React</li>
                                <li>Vue</li>
                                <li>Svelte</li>
                                <li>Django</li>
                                <li>PHP</li>
                                <li>MySQL/Mongodb</li>
                                <li>Wordpress</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Other</h4>
                            <ul>
                                <li>C#</li>
                                <li>C++</li>
                                <li>Python</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ position: "relative" }} className="social">
                    <div style={{ width: "100%", height: "400px", display: "block", position: "relative" }}>
                        <Image src="/pfp.svg" layout="fill" objectFit="contain" />
                    </div>
                    <h3>Follow my work</h3>
                    <div className="social-buttons">
                        <a href="https://github.com/ntenebruso" target="_blank"><button className="btn"><i className="bi bi-github"></i> Github</button></a>
                        <a href="https://www.instagram.com/nick_tenebruso/" target="_blank"><button className="btn"><i className="bi bi-instagram"></i> Instagram</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}