import { ReactComponent as Logo } from "../assets/graphics/logo.svg";
import Calligraphy from "../assets/graphics/calligraphy.png";

export default function Header () {
    return (
        <div className="header">
            <div className="header__content">
                <Logo></Logo>
                <div className="header__content__calligraphy">
                    <img src={Calligraphy} role="presentation"/>
                </div>
            </div>
        </div>
    )
}