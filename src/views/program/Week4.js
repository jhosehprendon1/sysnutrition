import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";
import { Link } from 'react-router-dom';

const Week4 = () => {
  const history = useHistory();
  const [showPlan, setShowPlan] = useState(false)
  const [showDay1, setShowDay1] = useState(false)
  const [showDay2, setShowDay2] = useState(false)
  const [showDay3, setShowDay3] = useState(false)
  const [showDay4, setShowDay4] = useState(false)
  const [showDay5, setShowDay5] = useState(false)
  const [showDay6, setShowDay6] = useState(false)
  const [showDay7, setShowDay7] = useState(false)
  const [showDay8, setShowDay8] = useState(false)
  const [showDay9, setShowDay9] = useState(false)


  const goBack = () => {
    history.push(RoutesLiterals.profile)
  }
  
  const showContent = (content) => {
    if ( content === "day1") {
      setShowDay1(!showDay1)
    }

    if ( content === "day2") {
      setShowDay2(!showDay2)
    } 

    if ( content === "day3") {
      setShowDay3(!showDay3)
    }

    if ( content === "day4") {
      setShowDay4(!showDay4)
    }

    if ( content === "day5") {
      setShowDay5(!showDay5)
    }

    if ( content === "day6") {
      setShowDay6(!showDay6)
    }

    if ( content === "day7") {
      setShowDay7(!showDay7)
    }

    if ( content === "day8") {
      setShowDay8(!showDay8)
    }

    if ( content === "day9") {
      setShowDay9(!showDay9)
    }
  }

  const showArrow = (bool) => {
    return bool ? <span style={{marginLeft: "5px"}}>▾</span> : <span style={{marginLeft: "5px"}}>▸</span>
  }

  return (
    <div className="container-week">
      <h3>Semana 4</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day1")} style={{fontWeight: "bold", marginLeft: "5%"}}>Fase de Reintroducción {showArrow(showDay1)}</p>
          {showDay1 ?
            <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/RVZu9fVEtTM" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day2")} style={{fontWeight: "bold", marginLeft: "5%"}}>Reintroducción 1 a 1 {showArrow(showDay2)}</p>
          {showDay2 ? 
            <div>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/a1qnGX47__4" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{marginLeft: "5%", marginTop: "20px"}}>
                <p>Orden de Alimentos a Reintroducir</p>
                <Link to="/files/orden-reintroduccion.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Guía</button>
                </Link>
              </div>
              <div style={{marginLeft: "5%", marginTop: "20px"}}>
                <p>Sintomas a Monitorear en la Reintroducción</p>
                <Link to="/files/sintomas-reintroduccion.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Guía</button>
                </Link>
              </div>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day3")} style={{fontWeight: "bold", marginLeft: "5%"}}>Diario Prueba de Tolerancia {showArrow(showDay3)}</p>
          {showDay3 ? 
            <div style={{marginLeft: "5%", marginTop: "20px"}}>
              <p>Aquí encontrarás la metodología a aplicar cada vez que quieras probar tolerancia con un alimento.</p>
              <Link to="/files/prueba-tolerancia.pdf" target="_blank" download>
                <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Guía</button>
              </Link>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day4")} style={{fontWeight: "bold", marginLeft: "5%"}}>Cierre del Programa {showArrow(showDay4)}</p>
          {showDay4 ? 
            <div>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/TsJc8O_rTLY" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            : ""
          }
        </div>
      </div>
    </div>
  )
};

export default Week4;