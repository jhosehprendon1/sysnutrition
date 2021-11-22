import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const PlanAntiinflamatorio = () => {
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
      <h3>Reto de Alimentación Antiinflamatoria de 5 Dias</h3>
      <div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day6")} style={{fontWeight: "bold", marginLeft: "5%"}}>Introducción {showArrow(showDay6)}</p>
          {showDay6 ? 
            <div className="container-center">
              <iframe className="reto-video" src="https://www.youtube.com/embed/nv13QD6vVcA" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div style={{textAlign: 'center', color: '#283d54', marginTop: '10px'}}>
                <h3>Descarga la guía y únete a los grupos! Vas a poder publicar tus dudas y acceder al material de cada día</h3>
              </div>
              <div style={{margin: 'auto', textAlign: "center"}}>
                <Link to="/files/guia-reto-antiinflamatorio.pdf" target="_blank" download>
                  <button type="submit" style={{padding: "10px 20px", marginRight: "10px"}} className="primary-button full">Descargar el Plan</button>
                </Link>
                <a href="https://www.facebook.com/groups/615110279521790"><button type="submit" style={{padding: "10px 20px"}} className="primary-button full">Acceso al grupo de Facebook</button></a>
              </div>
              <p style={{fontSize: "15px", textAlign: "center"}}>Nota: Si descargas en tu móvil debes buscar en carpetas de Descargas. Si tienes problemas escríbeme por el grupo de Facebook</p>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day1")} style={{fontWeight: "bold", marginLeft: "5%"}}>Dia 1 {showArrow(showDay1)}</p>
          {showDay1 ? 
            <div className="container-center">
            <div style={{textAlign: 'center', color: '#283d54', width: "90%", margin: "10px 0"}}>
              <h3 style={{marginTop: "-14px"}}>En este video vas a aprender por que la inflamación no es del todo mala y que función cumple en tu cuerpo</h3>
            </div>
            <iframe className="reto-video" src="https://www.youtube.com/embed/NWeypwYt1SI?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p style={{margin: "15px 0", fontWeight: "bold"}}>Menú del Dia:</p>
            <div style={{margin: "0 0 10px 5%"}}>
              <p>Agua con limón en ayunas</p>
              <p>Desayuno: Papaya + Arepa de yuca + Huevos revueltos + Rugula</p>
              <p>Almuerzo: Pollo y calabaza al horno + Chips de Kale</p>
              <p>Cena: Caldo de huesos + Ensalada de vegetales a tu gusto + Pavo o pollo</p>
              <p>Nota: Recuerda que este menú es una propuesta, pero puedes adaptarlo con alimentos que tengas en casa y que te gusten, siempre respetando las pautas de alimentación antiinflamatoria.</p>
            </div>
          </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day2")} style={{fontWeight: "bold", marginLeft: "5%"}}>Dia 2 {showArrow(showDay2)}</p>
          {showDay2 ? 
             <div className="container-center">
             <div style={{textAlign: 'center', color: '#283d54', width: "90%", margin: "10px 0"}}>
               <h3 style={{marginTop: "-14px"}}>En este video vas a aprender los 4 alimentos pro-inflamatorios que debes evitar para mejorar tu salud</h3>
             </div>
             <iframe className="reto-video" src="https://www.youtube.com/embed/FID8G4J3vK4?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p style={{margin: "15px 0", fontWeight: "bold"}}>Menú del Dia:</p>
              <div style={{margin: "0 0 10px 5%"}}>
                <p>Agua con limón en ayunas</p>
                <p>Desayuno: Pudín de Chía en leche de coco + Frutos rojos</p>
                <p>Almuerzo: Merluza con papas y verduras al horno</p>
                <p>Cena: Crema de Ahuyama + pavo o pechuga + Espinacas</p>
                <p>Nota: Recuerda que este menú es una propuesta, pero puedes adaptarlo con alimentos que tengas en casa y que te gusten, siempre respetando las pautas de alimentación antiinflamatoria.</p>
              </div>
           </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day3")} style={{fontWeight: "bold", marginLeft: "5%"}}>Dia 3 {showArrow(showDay3)}</p>
          {showDay3 ? 
            <div className="container-center">
            <div style={{textAlign: 'center', color: '#283d54', width: "90%", margin: "10px 0"}}>
              <h3 style={{marginTop: "-14px"}}>En este video conocerás los alimentos con mayor poder anti-inflamatorio</h3>
            </div>
            <iframe className="reto-video" src="https://www.youtube.com/embed/l8LB0j_Xlyg?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>Bebida Anti-inflamatoria</h3>
            <iframe className="reto-video" src="https://www.youtube.com/embed/2eIEP16prRg?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>Galleta con Frutos del Bosque</h3>
            <iframe className="reto-video" src="https://www.youtube.com/embed/WNH4-LIyKN0?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p style={{margin: "15px 0", fontWeight: "bold"}}>Menú del Día</p>
            <div style={{margin: "0 0 10px 5%"}}>
              <p>Agua con limón en ayunas</p>
              <p>Desayuno: Panquecas de banano, coco y espinaca</p>
              <p>Almuerzo: Pisto de verduras + arroz + huevos</p>
              <p>Cena: Acelgas salteadas + Olivas + pavo a la plancha</p>
              <p>Nota: Recuerda que este menú es una propuesta, pero puedes adaptarlo con alimentos que tengas en casa y que te gusten, siempre respetando las pautas de alimentación antiinflamatoria.</p>
            </div>
          </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day4")} style={{fontWeight: "bold", marginLeft: "5%"}}>Dia 4 {showArrow(showDay4)}</p>
          {showDay4 ? 
            <div className="container-center">
            <div style={{textAlign: 'center', color: '#283d54', width: "90%", margin: "10px 0"}}>
              <h3 style={{marginTop: "-14px"}}>Descubre cuantas veces debes comer para ayudar a tu sistema inmune y digestivo</h3>
            </div>
            <iframe className="reto-video" src="https://www.youtube.com/embed/_6t5joUwU5Y?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>Cómo el estrés afecta tu inflamación</h3>
            <iframe className="reto-video" src="https://www.youtube.com/embed/8hVlRQU003Q?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p style={{margin: "15px 0", fontWeight: "bold"}}>Menú del Dia: </p>
            <div style={{margin: "0 0 10px 5%"}}>
              <p>Agua con limón en ayunas</p>
              <p>Desayuno: Omelette con champiñones y tomate cherry + Aguacate + Pan de trigo sarraceno + naranja</p>
              <p>Almuerzo: Pollo/pavo + Ensalada mixta + Bastones de yuca</p>
              <p>Cena: Sardinas a la plancha + Verduras al gusto</p>
              <p>Nota: Recuerda que este menú es una propuesta, pero puedes adaptarlo con alimentos que tengas en casa y que te gusten, siempre respetando las pautas de alimentación antiinflamatoria.</p>
            </div>
        </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card">
          <p onClick={() => showContent("day5")} style={{fontWeight: "bold", marginLeft: "5%"}}>Dia 5 {showArrow(showDay5)}</p>
          {showDay5 ? 
             <div className="container-center">
             <iframe className="reto-video" src="https://www.youtube.com/embed/DglP57yG9Sg?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p style={{margin: "15px 0", fontWeight: "bold"}}>Menú del Dia: </p>
              <div style={{margin: "0 0 20px 5%"}}>
                <p>Agua con limón en ayunas</p>
                <p>Desayuno: Porridge de calabaza + arándanos</p>
                <p>Almuerzo: Salmon + Brocoli + Papa/Batata</p>
                <p>Cena: Tortillas Mexicanas Anti-inflamatorias (con pollo, pico de gallo y aguacate)</p>
                <p>Nota: Recuerda que este menú es una propuesta, pero puedes adaptarlo con alimentos que tengas en casa y que te gusten, siempre respetando las pautas de alimentación antiinflamatoria.</p>
              </div>
           </div>
            : ""
          }
        </div>

        <div style={{padding: "30px 0 30px 6%"}} className="systems-card-week week-card">
          <p>El reto de 5 dias te ha dado una introducción a la alimentación antiinflamatoria y probablemente has comenzado a ver mejoras.</p>
          <p>Pero cada cuerpo es diferente y reacciona de forma distinta a los alimentos. Por lo tanto necesitas seguir un plan personalizado.</p>
          <p>Un plan que esté ajustado a tus condiciones, tu cuerpo y necesidades. Donde podrás ver mejoras más rápido, eliminar los síntomas y sentirte bien.</p>
          <p style={{fontWeight: "bold"}}>Comienza el Programa de Desinflamación Personalizado por sólo $99</p>
          <a href="https://www.mesana.co/programa-avanzado"><button type="button" style={{margin: '0px 0 20px 0', fontWeight: 'bold', padding: '12px' }} className="primary-button">Hacer Pago del programa</button></a>
          <p style={{marginTop: "-10px"}}>Si tienes problemas o alguna duda puedes escribirme a mi Whatsapp <span style={{fontWeight: "bold"}}>+573115120932</span></p>
        </div>
      </div>
    </div>
  )
};

export default PlanAntiinflamatorio;