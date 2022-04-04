import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Principal } from './components/Home/Home'
import { CardP } from './components/Proyectos/CardProyect'
import { Contact } from './components/Contacto/Contacto'
import { Inicio } from './components/Inicio/Saludo'
import { Habilidades } from './components//Habilidades/Habilidades'
import { AcercaDe } from './components/AcercaDeMi/AcercaDe'

function App() {

  return (
    <Router>
      <Principal />
      <Routes>
          <Route exact path="/" element={ <Inicio />} />
          <Route exact path="acercaDe" element={ <AcercaDe />} />
          <Route exact path="habilidades" element={ <Habilidades />} />
          <Route exact path="proyectos" element={ <CardP />} />
          <Route exact path="contacto" element={ <Contact />} />
        </Routes>
    </Router>


  
  );
}

export default App;
