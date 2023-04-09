import React from "react";



export default function Aleatorio (props) {


    var aleatorio =  Math.floor(Math.random() * (props.max - props.min + 1)) + props.min

    return(
        <div>
        <h1>Numero aleatório</h1>
        <p>valor minimo:{props.min}</p>
        <p>valor máximo:{props.max}</p>

        <p>Valor aleatório:{aleatorio}</p>

        
        </div>

       
    ) 


}