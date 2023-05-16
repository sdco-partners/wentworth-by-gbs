import SignupForm from "../components/SignupForm";
import { ReactComponent as DesktopCardBg } from "../assets/graphics/card_horizontal.svg";
import { ReactComponent as MobileCardBg } from "../assets/graphics/card_vertical.svg";
import { ReactComponent as No162 } from "../assets/graphics/no162.svg";
import { ReactComponent as WentworthStreet } from "../assets/graphics/wentworth-street.svg";
import { ReactComponent as Envelope } from "../assets/graphics/envelope.svg";


export default function About () {
    return (
        <>
        <div className="about">
            <div className="about__card">
                <div className="about__card-bg">
                    <MobileCardBg className="mobile"></MobileCardBg>
                    <DesktopCardBg className="desktop"></DesktopCardBg>
                </div>
                <div className="about__card-content">
                    <div className="about__card-address">
                        <No162></No162>
                        <WentworthStreet></WentworthStreet>
                        <p className="h2">Charleston, South Carolina</p>
                    </div>
                    <div className="about__card-description">
                        <h2 className="h3">A shop, experience, and thoughtfully curated collection of new, vintage, and one-of-kind goods from around the world.</h2>
                    </div>
                    <div className="about__card-social">
                        <p className="h4">Follow the progress @wentworthbygbs.</p>
                        <p className="h4">Subscribe for the latest news and updates.</p>
                    </div>
                <div className="about__card-form">
                    <SignupForm></SignupForm>
                </div>
                    <div className="about__card-contact">
                        <div className="phone">
                            <p className="h2">Phone</p>
                            <p>843.737.0512</p>
                        </div>
                        <div className="email">
                            <Envelope></Envelope>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}