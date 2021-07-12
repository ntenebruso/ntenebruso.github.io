import { gsap } from "gsap";
import { useEffect, useState, useRef } from "react";

export default function Header() {
    const headerRef = useRef(null);
    const [scrollTop, setScrollTop] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(document.documentElement.scrollTop);
            if (scrollTop > 50) {
                headerRef.current.classList.add("scrolled");
            } else {
                headerRef.current.classList.remove("scrolled");
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollTop]);


    return (
        <div className="header" ref={headerRef}>
            <div className="spacer">
                <h2>N<span className="accent">T</span></h2>
                <nav>
                    <div onClick={() => { gsap.to(window, { scrollTo: { y: 0 } }) }}>Home</div>
                    <div onClick={() => { gsap.to(window, { scrollTo: "#about" }) }}>About</div>
                    <div onClick={() => { gsap.to(window, { scrollTo: "#projects" }) }}>Projects</div>
                </nav>
            </div>
        </div>
    )
}