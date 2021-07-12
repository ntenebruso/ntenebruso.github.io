export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero-intro">
                    <h1>I'm a <span className="accent">web developer</span>.</h1>
                    <span className="subtitle">My name is Nick Tenebruso</span>
                    <div className="buttons">
                        <button className="btn primary">My projects</button>
                        <button className="btn">Contact me</button>
                    </div>
                </div>
            </section>
            <div className="hero-bg"></div>
        </>
    )
}