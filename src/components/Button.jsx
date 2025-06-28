import React from "react";
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from "react-router-dom";

const Button = ({ bgColor, color, size, text, borderRadius}) => {
     const navigate = useNavigate();
    return (
        <button
         type="button"
         style={{background: bgColor, color, borderRadius}}
         className={`text-${size} p-3 hover:drop-shadow-xl`}
         onClick={ () => navigate('/line')}
        >
            {text}

        </button>
    )
}

export default Button;