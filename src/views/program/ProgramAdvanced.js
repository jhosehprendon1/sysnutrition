import React from "react";

const ProgramAdvanced = () => {

  return (
    <div className="container-center">
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h2 style={{margin: 'auto'}}>Ya has dado el primer paso para mejorar tus síntomas y tu calidad de vida</h2>
        <h3>El siguiente paso consiste en personalizar tu alimentación reconociendo tus alimentos amigos y enemigos</h3>
        <h2 style={{marginBottom: '10px'}}>El Programa Antiinflamatorio Avanzado te Ayudará</h2>
      </div>
      <iframe className="reto-video" src="https://www.youtube.com/embed/DglP57yG9Sg?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p style={{marginTop: '20px', marginBottom: '-5px', fontWeight: 'bold'}}>Lo que encontrarás en el Programa:</p>
      <p>El programa consta de 3 fases.</p>
      <div className="reto-content-card" style={{width: "90%", marginBottom: "20px"}}>
        <p style={{fontWeight: "bold", marginLeft: "2%"}}>Fase 1: Quiz de Evaluación:</p>
        <ul style={{fontSize: '16px'}}>
          <li>Conocerás tu nivel de inflamación y los sistemas más afectados.</li>
        </ul>
        <p style={{fontWeight: "bold", marginLeft: "2%"}}>Fase 2: Controla tu inflamación:</p>
        <ul style={{fontSize: '16px'}}>
          <li>Eliminarás los alimentos inflamatorios que agravan tus síntomas e incorporarás los de poder antiinflamatorio, entendiendo el porque de cada cambio. </li>
          <li>Tendrás lo necesario para llevar una alimentación antiinflamatoria: 2 opciones de menú con sus preparaciones (flexible y avanzado), videos, guías y recetas.</li>
          <li>No solo se trata de alimentación, trabajarás hábitos de vida que te ayudarán a potenciar tu proceso de recuperación. </li>
        </ul>
        <p style={{fontWeight: "bold", marginLeft: "2%"}}>Fase 3: Reintroducción 1a1:</p>
        <ul style={{fontSize: '16px'}}>
          <li>Personalizarás tu alimentación probando tolerancia de aquellos alimentos que eliminaste durante el programa, reconociendo cuales son amigos y enemigos de tu cuerpo.</li>
        </ul>
      </div>
      <p style={{marginBottom: '10px', color: '#00b300', fontSize: '40px'}}><strong>$99</strong></p>
      <div id="paypal-programa-avanzado" style={{textAlign: 'center', marginTop: '5px'}}></div>
      <div style={{fontSize: '14px', textAlign: 'center'}}>
        <p>Si tienes problemas para completar el pago escríbeme a:</p>
        <p style={{marginTop: '-15px'}}>carolita320@gmail.com</p>
      </div>
    </div>
  )
};

export default ProgramAdvanced;