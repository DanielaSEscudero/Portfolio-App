import React from 'react'
import '../../Scss/habilidades.scss'


export const Habilidades = () => {
  return ( 
        <div className="habilidades" id="habilidades">
            <h2 className="section_title habilidades_title"> Mis Habilidades</h2>
            <div className="habilidades_grid">
                <div className="subtitle">
                    <h3>Tecnologias que manejo</h3> 
                    <div className="tecnologias_grid">
                        <div className="tecnologias_card">
                            <i className="fab fa-html5 iconos"></i>
                            <span className="contenedor-iconos-texto">HTML</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-css3-alt iconos"></i>
                            <span className="contenedor-iconos-texto">CSS</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-js iconos"></i>
                            <span className="contenedor-iconos-texto">JavaScript</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-react iconos"></i>
                            <span className="contenedor-iconos-texto">React</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-node-js"></i>
                            <span className="contenedor-iconos-texto">Node JS</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-bootstrap iconos"></i>
                            <span className="contenedor-iconos-texto">Bootstrap</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-slack iconos"></i>
                            <span className="contenedor-iconos-texto">Slack</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-git iconos"></i>
                            <span className="contenedor-iconos-texto">Git</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-github github iconos"></i>
                            <span className="contenedor-iconos-texto">Github</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-sass iconos"></i>
                            <span className="contenedor-iconos-texto">Sass</span></div>
                        
                    </div>
                </div>
                <div className="blandas">
                    <h3 className="subtitle">Otras aptitudes</h3>
                    <ul className="habilidades-lista">
                        Me gusta plantear los proyectos pensando en el usuario final para brindar la mejor experiencia.
                        Tratando de mejorar dia a dia mis diseño y las interfaces para mejor navegavilidad.
                    
                    </ul>
                </div>
            </div>
        </div>

  )
}


