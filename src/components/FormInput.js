import react from "react";
import Button from "./Button";
import "../style/FormInput.css";

class FormInput extends react.Component{
    render() {
        return (
            <form style={inputForm}>
                <input 
                style={input} 
                placeholder="add Task"
                type="text"/>
                <Button text="Add" variant="primary"/>
            </form>
        )
    }
}

export default FormInput;

const inputForm = {
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.05rem 0"
}

const input = {
    width: "70%",
    border: "none"

}