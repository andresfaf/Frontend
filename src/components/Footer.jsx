import "../assets/styles/footer.css";
import logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="site-footer w-100">

      <div className="footer-bg container-fluid">

        <div className="footer-inner container py-4 py-md-5">
          <div className="row g-4 g-md-5">

            <div className="col-12 col-sm-6 col-lg-3 col-xl-2">
              <h6 className="footer-title mb-4">Contáctanos</h6>
              <ul className="footer-list">
                <li>E-mail: comercial@qvision.us</li>
                <li>WhatsApp: +300 255 02 65</li>
                <li><a href="#contacto" className="footer-link">Comunícate con nosotros</a></li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 col-xl-2">
              <h6 className="footer-title  mb-4">Categorías de Cursos</h6>
              <ul className="footer-list">
                <li><a href="#desarrollo" className="footer-link">Desarrollo</a></li>
                <li><a href="#metodologias" className="footer-link">Metodologías de Proyectos</a></li>
                <li><a href="#pruebas" className="footer-link">Pruebas Funcionales</a></li>
                <li><a href="#pruebas" className="footer-link">Pruebas No Funcionales</a></li>
                <li><a href="#arquitectura" className="footer-link">DevOps</a></li>
                <li><a href="#datos" className="footer-link">Cloup</a></li>
                <li><a href="#automatizacion" className="footer-link">Automatización</a></li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 col-xl-2">
              <h6 className="footer-title  mb-4">Certificaciones</h6>
              <ul className="footer-list">
                <li><a href="#scrum-master" className="footer-link">Scrum Master</a></li>
                <li><a href="#product-owner" className="footer-link">Scrum Product Owner</a></li>
                <li><a href="#qa" className="footer-link">Scrum Developer</a></li>
                <li><a href="#design-thinking" className="footer-link">Agile Coach</a></li>
                <li><a href="#kanban" className="footer-link">Design Thinking</a></li>
                <li><a href="#devops" className="footer-link">kanban</a></li>
                <li><a href="#devops" className="footer-link">OKR</a></li>
                <li><a href="#devops" className="footer-link">DevOps</a></li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
              <h6 className="footer-title  mb-4">Q‑Vision Technologies</h6>
              <ul className="footer-list">
                <li><a href="#desarrollo-sw" className="footer-link">Desarrollo de Software</a></li>
                <li><a href="#aseguramiento" className="footer-link">Aseguramiento de Calidad</a></li>
                <li><a href="#automatizacion-rpa" className="footer-link">Automatización de Pruebas con RPA</a></li>
                <li><a href="#gestion-datos" className="footer-link">Talento TI</a></li>
                <li><a href="#gestion-datos" className="footer-link">Gestión Inteligencia de Datos</a></li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-12 col-xl-3">
              <h6 className="footer-title mb-4">Soporte</h6>
              <ul className="footer-list">
                <li style={{ opacity: '50%' }}>Si tienes inconvenientes o dudas, contáctanos al correo</li>
                <li><a className="footer-link" href="mailto:izyacademy@qvision.us">izyacademy@qvision.us</a></li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="row mt-4 align-items-center gy-3">
            <div className="col-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-center justify-content-lg-start order-1 order-md-1">
              {logo ? (
                <img src={logo} alt="IzyAcademy" height="28" className="opacity-85" />
              ) : (
                <strong className="text-white">IzyAcademy</strong>
              )}
            </div>

            <div className="col-12 col-md-4 col-lg-6 order-3 order-md-2">
              <div className="footer-terms d-flex flex-wrap justify-content-center gap-2 text-center">
                <a href="#terminos" className="footer-link">Términos y Condiciones</a>
                <span className="text-white-50">·</span>
                <a href="#privacidad" className="footer-link">Política Tratamiento de Datos</a>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center justify-content-lg-end order-2 order-md-3">
              <div className="d-inline-flex gap-3">
                <a href="#" className="footer-social-link" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="footer-social-link" aria-label="X"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="footer-social-link" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="footer-social-link" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="footer-social-link" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
          </div>

          <div className="row mt-3 mt-md-4 justify-content-center">
            <div className="col-12 text-center">
              <small className="opacity-85">
                Copyright © {new Date().getFullYear()} IzyAcademy · Marca Registrada · By Q‑Vision Technologies.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
