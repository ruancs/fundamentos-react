import ReactDOM from "react-dom"
import React from "react"
import './index.css'
import Cu from './components/basicos/Primeiro'
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/Layout/Card"



ReactDOM.render(
    
    
    <div id="root">

      <h1>Fundamentos React</h1>

      <div className="Cards">

        <Card titulo="Desafio Aleatório">
          <Aleatorio min = {1} max = {50}/>
        </Card>

        <Card titulo="Desafio Aleatório">
          <Aleatorio min = {1} max = {10}/>
        </Card>

        <Card titulo="Primeiro componente">
          <Cu/>
        </Card>

        <Card titulo="Segundo Componente - Com Parâmetro">

          <ComParametro
          titulo="Segundo componente"
          subtitulo="subtitulo do segundo componente"
          />
        </Card>

        <Card titulo="Fragmento">
          <Fragmento/>
        </Card>

      </div>

        

        

       

    </div>,
    document.getElementById('root')
 
)
