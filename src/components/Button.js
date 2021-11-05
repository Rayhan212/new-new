import react from "react";
import "../style/Button.css"
const Button = props => {
    return (
        <button className={`btn btn-${props.variant}`}>
            {props.text}
        </button>
    )
}

export default Button;