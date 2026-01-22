
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../assets/styles/header.css";

import HeaderFondo from "../assets/HeaderFondo.jpg";
import HeaderGrupo from "../assets/HeaderGrupo.jpg";
import Logo from "../assets/Logo.png";

export default function Header() {
  return (
    <>

      <div
        class="modal fade"
        id="miModal"
        tabindex="-1"
        aria-labelledby="miModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h5 class="modal-title" id="miModalLabel">Inicie sesión en su cuenta</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Correo electrónico</label>
                  <input type="text" id="nombre" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" id="password" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary w-100 submit-btn">
                  Acceder
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <Navbar
        expand="lg"
        className="navbar-overlay z-3"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="izyacademy" height="45" className="me-4" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="me-4">Inicio</Nav.Link>

              <NavDropdown title="Rutas de Formación" id="routes-dd" className="me-4">
                <NavDropdown.Item as={Link} to="/ruta/frontend">Cientifico De Datos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ruta-formacion-net">Ruta de Formación En .NET</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ruta/datos">Ruta de Formación en Automatización</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Cursos" id="courses-dd" className="me-4">
                <NavDropdown.Item as={Link} to="/cursos/html-css">HTML & CSS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cursos/js">JavaScript</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cursos/react">React</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/quienes-somos" className="me-4">Quiénes somos</Nav.Link>
            </Nav>

            <Nav className="ms-lg-3">
              <Nav.Link as={Link} to="/login"
                data-bs-toggle="modal"
                data-bs-target="#miModal"
                className="d-flex align-items-center gap-2">
                <i className="bi bi-person me-2" aria-hidden="true"></i>
                <span>Iniciar sesión</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="d-flex align-items-center gap-2">
                <span className="me-2">|</span>
                <i className="bi bi-search" aria-hidden="true"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="hero-wrap position-relative overflow-hidden" aria-label="Sección principal de bienvenida">
        <div className="hero-left" style={{ backgroundImage: `url(${HeaderFondo})` }} aria-hidden="true" />
        <div className="hero-right only-image" style={{ backgroundImage: `url(${HeaderGrupo})` }} aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container position-relative hero-content">
          <h1 className="display-4 fw-semibold text-white text-center mb-3">
            Continúa tu formación con <span className="brand">izyAcademy</span>
          </h1>
          <p className="lead text-white text-center mb-0">
            Te ofrecemos una experiencia de aprendizaje basada en la formación por proyectos,
            apoyada en el uso de recursos interactivos para que tu aprendizaje sea efectivo.
          </p>
        </div>
      </section>
    </>
  );
}
