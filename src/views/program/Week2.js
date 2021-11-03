import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";
import { Link } from 'react-router-dom';


const Week2 = () => {
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
      <h3>Semana 2</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day1")} style={{fontWeight: "bold", marginLeft: "5%"}}>Alimentos Antiinflamatorios {showArrow(showDay1)}</p>
          {showDay1 ? 
            <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/G2U0Te8MeSY" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day2")} style={{fontWeight: "bold", marginLeft: "5%"}}>Frutas y Vegetales {showArrow(showDay2)}</p>
          {showDay2 ? 
            <div>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/gnmsn7yFkCc" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{marginLeft: "5%"}}>
                <p>Lista de Frutas y Vegetales</p>
                <Link to="/files/frutas_vegetales.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
                </Link>
              </div>
              <p style={{marginLeft: "5%", fontWeight: "bold"}}>Limpieza y conservación de vegetales</p>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/VvoFSkgLkZs" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p style={{marginLeft: "5%", marginTop: "20px", fontWeight: "bold"}}>Ensalada Griega con Sandía</p>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/msE-Oi7nV5A" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day3")} style={{fontWeight: "bold", marginLeft: "5%"}}>Proteínas de Calidad y Omega 3 {showArrow(showDay3)}</p>
          {showDay3 ? 
            <div>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/uL8MaUxLrCo" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{marginLeft: "5%"}}>
                <p>Lista de Proteínas de Calidad</p>
                <Link to="/files/proteinas.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
                </Link>
              </div>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day4")} style={{fontWeight: "bold", marginLeft: "5%"}}>Hierbas y Especies {showArrow(showDay4)}</p>
          {showDay4 ? 
            <div>
              <div style={{marginLeft: "5%"}}>
                <p>Las hierbas y especies serán aliados en tu cocina. Potencian el sabor y aroma de tus platos y además aportan mayor nutrición. 

Algunos de estos son potentes moduladores de la inflamación y digestivos que han sido usados en medicina ancestral. 

Incluye en tus platos o en infusiones para favorecer el proceso de sanación.  

Tendrás también una lista de cuáles evitar temporalmente durante el programa por ser posibles inflamatorios o irritantes.</p>
                <p>Lista de Hierbas y especies</p>
                <Link to="/files/hierbas_especies.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
                </Link>
              </div>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day5")} style={{fontWeight: "bold", marginLeft: "5%"}}>Bebidas {showArrow(showDay5)}</p>
          {showDay5 ? 
            <div>
            <div style={{marginLeft: "5%"}}>
              <p>La bebida por excelencia es el AGUA, la única necesaria para tu salud. Aun así, te dejo opciones que además de hidratarte traerán beneficios adicionales a tu proceso de sanación. 
Por ejemplo, los caldos son ricos en aminoácidos que ayudan a sanar lesiones intestinales, las infusiones te ayudarán a reducir los niveles de ansiedad y mejorar el descanso.

También que bebidas evitar durante el programa por ser inflamatorias e irritantes.</p>
              <p>Lista de Bebidas</p>
              <Link to="/files/bebidas.pdf" target="_blank" download>
                <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
              </Link>
            </div>
          </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day6")} style={{fontWeight: "bold", marginLeft: "5%"}}>Salud Digestiva {showArrow(showDay6)}</p>
          {showDay6 ? 
          <div>
            <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/c8NKGzUyJXE" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div style={{marginLeft: "5%", marginTop: "20px"}}>
              <p>Lista de Fermentados</p>
              <Link to="/files/fermentados.pdf" target="_blank" download>
                <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
              </Link>
            </div>
            <p style={{marginLeft: "5%", fontWeight: "bold"}}>Remolacha Fermentada - Probiótico</p>
            <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/21mPe7oxtCs" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            : ""
          }
        </div>
      </div>
    </div>
  )
};

export default Week2;