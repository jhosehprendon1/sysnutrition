import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";
import { Link } from 'react-router-dom';

const Week1 = () => {
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
      <h3>Semana 1</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day1")} style={{fontWeight: "bold", marginLeft: "5%"}}>Qué es la Inflamación {showArrow(showDay1)}</p>
          {showDay1 ? 
            <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/ZWLrBF4BKk0?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day2")} style={{fontWeight: "bold", marginLeft: "5%"}}>Menú {showArrow(showDay2)}</p>
          {showDay2 ? 
            <>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/aGpYCCosiKo?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{marginLeft: "5%", marginTop: "20px"}}>
                <p>Menú Avanzado</p>
                <Link to="/files/menu_avanzado.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Menú</button>
                </Link>
              </div>
              <div style={{marginLeft: "5%", marginTop: "20px"}}>
                <p>Preparaciones del Menú Avanzado</p>
                <Link to="/files/preparacion_menu_avanzado.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Preparaciones</button>
                </Link>
              </div>
              <div style={{marginLeft: "5%", marginTop: "20px"}}>
                <p>Menú Flexible</p>
                <Link to="/files/menu_leve.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Menú</button>
                </Link>
              </div>
              <div style={{marginLeft: "5%", marginTop: "20px"}}>
                <p>Preparaciones del Menú Flexible</p>
                <Link to="/files/preparacion_menu_flexible.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Preparaciones</button>
                </Link>
              </div>
              <div style={{marginLeft: "5%", marginTop: "20px"}}>
                <p>Observaciones del Menú</p>
                <Link to="/files/observaciones_menu.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Observaciones</button>
                </Link>
              </div>
              <div style={{marginLeft: "5%", marginTop: "20px"}}>
                <p>Meriendas</p>
                <p>Aquí encontrarás opciones de meriendas en caso de que quedes con hambre o te antojes de algo. Solo recuerda que es preferible tener comidas principales con la que sientas satisfacción y así evitar estar picando.</p>
                <Link to="/files/meriendas.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Meriendas</button>
                </Link>
              </div>
            </>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day3")} style={{fontWeight: "bold", marginLeft: "5%"}}>Fase de Eliminación{showArrow(showDay3)}</p>
          {showDay3 ? 
            <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/vCICb_w_mPY?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day4")} style={{fontWeight: "bold", marginLeft: "5%"}}>1. Azúcares {showArrow(showDay4)}</p>
          {showDay4 ? 
            <div>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/NyZ9uzzU1I4?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{marginLeft: "5%"}}>
                <p>Lista de Azucares a Evitar y Permitidos</p>
                <Link to="/files/azucares.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
                </Link>
              </div>
              <p style={{marginLeft: "5%", fontWeight: "bold"}}>Postre sin Azúcar</p>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/nornHTHRQa8?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day5")} style={{fontWeight: "bold", marginLeft: "5%"}}>2. Grasas Inflamatorias {showArrow(showDay5)}</p>
          {showDay5 ? 
            <div>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/dk7ACM7yinY?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{marginLeft: "5%"}}>
                <p>Lista de Grasas a Evitar y Recomendadas</p>
                <Link to="/files/grasas.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
                </Link>
              </div>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day6")} style={{fontWeight: "bold", marginLeft: "5%"}}>3. Gluten {showArrow(showDay6)}</p>
          {showDay6 ? 
            <div>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/muBR64d0aio?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{marginLeft: "5%"}}>
                <p>Lista de Alimentos con Gluten y Reemplazos</p>
                <Link to="/files/gluten.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
                </Link>
              </div>
              <p style={{marginLeft: "5%", fontWeight: "bold"}}>Cocción de Yuca y Plátano</p>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/JAhK3etAmYA?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p style={{marginLeft: "5%", fontWeight: "bold", marginTop: "20px"}}>Arepa de Yuca y Plátano</p>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/8TbRnN6hm4o?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p style={{marginLeft: "5%", fontWeight: "bold", marginTop: "20px"}}>Tortillas de Yuca</p>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/GEg_b_Oflp4?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day7")} style={{fontWeight: "bold", marginLeft: "5%"}}>4. Lácteos {showArrow(showDay7)}</p>
          {showDay7 ? 
            <div>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/Ssy7BgkXlzk?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{marginLeft: "5%"}}>
                <p>Lista de Lácteos a Evitar y Reemplazos</p>
                <Link to="/files/lacteos.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
                </Link>
              </div>
              <p style={{marginLeft: "5%", fontWeight: "bold"}}>Leche de Coco</p>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/UteK1_3OptQ?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p style={{marginLeft: "5%", fontWeight: "bold", marginTop: "20px"}}>Postre: Bowl con Leche de Coco y Frutos Rojos</p>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/uunR3yuENww?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day8")} style={{fontWeight: "bold", marginLeft: "5%"}}>5. Granos y Semilla {showArrow(showDay8)}</p>
          {showDay8 ? 
            <div>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/HxbyzCmAHZY?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{marginLeft: "5%"}}>
                <p>Lista de Granos y Semillas a Evitar y Reemplazos</p>
                <Link to="/files/granos_semillas.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
                </Link>
              </div>
              <p style={{marginLeft: "5%", fontWeight: "bold"}}>Remojo y Germinación</p>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/e6NW-kE5onQ?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day9")} style={{fontWeight: "bold", marginLeft: "5%"}}>6. Solanáceas y Huevos {showArrow(showDay9)}</p>
          {showDay9 ? 
            <div>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/JuQ4DCBegzg?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{marginLeft: "5%"}}>
                <p>Lista de Solanáceas y Huevos Recomendados</p>
                <Link to="/files/solanaceas_huevos.pdf" target="_blank" download>
                  <button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Lista</button>
                </Link>
              </div>
              <p style={{marginLeft: "5%", fontWeight: "bold"}}>Falsa Salsa de Tomate</p>
              <iframe style={{margin: "0 20px 0 5%"}} className="reto-video" src="https://www.youtube.com/embed/9r4M8nxXP_4?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            : ""
          }
        </div>
      </div>
    </div>
  )
};

export default Week1;