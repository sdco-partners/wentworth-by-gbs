import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function Landing () {
    return (
        <>
        <div className="landing">
            <Header></Header>
            <FadeIn delay={2000} transitionDuration={1000}>
                <About></About>
            </FadeIn>
            <Footer></Footer>
        </div>
        </>
    )
}