import React from 'react'
import { Link } from 'react-router-dom';

import '../form.css';

export default function MenuUnDiaDescarga() {
  return (
    <div className='container-center'>
			<div>
				<div style={{textAlign: 'center'}}>
					<h2 style={{fontSize: '35px', textAlign: 'center'}}>Haz Click en el Botón para Descargar el Menú</h2>
					<p>Si usas Chrome, la Guía se descargará en la barra inferior.</p>
					<p>Si usas Safari, se abrirá automáticamente en otra ventana.</p>
          <p>También puedes encontrarla en tu carpeta de descargas.</p>
					<Link to="/files/menu-1dia.pdf" target="_blank" download>
						<button type="button" style={{marginTop: '10px', fontWeight: 'bold', padding: '12px' }} className="primary-button">Descargar Menú</button>
					</Link>
				</div>
			</div>
		</div>
  )
}