import { ReactComponent as No162 } from "../assets/graphics/no162.svg";
import { ReactComponent as Tagline } from "../assets/graphics/tagline.svg";
import Mark from "../assets/graphics/mark.png";

export default function Footer () {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__left">
                    <img src={Mark} alt=""/>
                </div>
                <div className="footer__content__right">
                    <No162></No162>
                    <Tagline></Tagline>
                </div>
            </div>
        </div>
    )
}