import React from 'react'
import '../../Scss/acercaDe.scss'


export const AcercaDe = () => {
  return (
    <div>
        <section className="sobre-mi" id="sobre-mi">
        <div className="c">
            <h2 className="section_title sobre-mi_title">Acerca de Mi</h2>
            <div className="sobre-mi_grid">
                <div className="sobre-mi_img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-app-827a6.appspot.com/o/image1foto%20perfil.png?alt=media&token=c020d98e-f02e-4eca-8143-5dc7f25b593b" width="500" alt="fotoPerfil" id="fotoPerfil"/>
                </div>
                <div className="sobre-mi_descripcion">
                    <h3>Soy Daniela Escudero, React Frontend Developer</h3>
                    <p className="descripcion_text">
                    Me descubri siendo una apasionada por el desarrollo web. <br/>
                        Siempre en formacion y aprendiendo.<br/>
                        Mi objetivo a futuro es porder desempeñarme como desarrolladora y poder vivir de y para ello.<br/>
                        Me intereso en el desarrollo personal y aspiro a desarrollar mis habilidades al maximo, para poder llevar adelante proyectos.<br/>
                        Amo compartir con personas y tengo muchas ganas de unirme a un grupo de trabajo para poder aportar valor y mis conocimientos.
                    </p>
                    <a className="btn-cv" href="https://firebasestorage.googleapis.com/v0/b/tienda-app-827a6.appspot.com/o/cv%20Daniela%20S%20Escudero.pdf?alt=media&token=af293ac0-0863-48c3-bb18-3366eb4971d6" rel="noopener noreferrer"
                        target="_blank" id="btmCv"><i class="fas fa-file-download"></i>Mirá mi CV!</a>

  
                </div>
            </div> 
        </div>
        </section>
    </div>
  )
}


