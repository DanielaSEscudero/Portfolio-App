import React from 'react'
import {Link} from 'react-router-dom'
import '../../Scss/navBar.scss'

export const NavBar = () => {

    return(
        <>
        <nav className="menu">
            <label className="logo">Daniela Escudero</label>
            <ul className="flex-navbar navbar-nav me-auto mb-2 mb-xl-0 menu_items">
                <Link to="/" className="navbar_link active">Inicio</Link>
                <Link to="acercaDe" className="navbar_link">Acerca de mi</Link>
                <Link to="habilidades" className="navbar_link">Habilidades</Link>
                <Link to="proyectos" className="navbar_link">Proyectos</Link>
                <Link to="/contacto" className="navbar_link">Contacto</Link>
            </ul>
            <div className="btn_menu">
                <i className="fa fa-bars"></i>
            </div>
        </nav>
        </>
    )
}