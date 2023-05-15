import About from "../components/About";
import { ReactComponent as Logo } from "../assets/graphics/logo.svg";

export default function Landing () {
    return (
        <>
        <div className="landing">
            <Logo></Logo>
            <About></About>
        </div>
        </>
    )
}