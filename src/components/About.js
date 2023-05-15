import SignupForm from "../components/SignupForm";
import { ReactComponent as cardVertical } from "../assets/graphics/card_vertical.svg";
import {ReactComponent as cardHorizontal } from "../assets/graphics/card_horizontal.svg";


export default function About () {
    return (
        <>
        <div className="about">
            <cardHorizontal></cardHorizontal>
            <SignupForm></SignupForm>
        </div>
        </>
    )
}