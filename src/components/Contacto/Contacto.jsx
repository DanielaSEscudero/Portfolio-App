import '../../Scss/contacto.scss'

export const Contact = () => {

    return(
        <div>
            <div className="wrapper">
                <div className="typing-demo">
                Puedes contactarme por...
                </div>
            </div>
            <div className="container contacto">
                <a href="mailto:danielasolescudero@gmail.com">
                <i className="fa fa-envelope" id="email"></i></a>
                
                <a href="https://www.linkedin.com/in/daniela-escudero-83a471a4/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" id="linkedin"></i></a>
                
                <a href="https://github.com/DanielaSEscudero" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github-square github" id="github"></i></a>

                <a href="https://wa.me/1137950122" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp" id="whatsapp"></i></a>
            </div>
        </div>
    )
}