
import "../assets/styles/registro.css";
import Foto from "../assets/HeaderFondo.jpg";

export default function Registro() {
  return (
    <section className="container">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-lg-6">
          <div className="frame-wrap">
            <div className="frame-img ratio ratio-4x3">
              <img src={Foto} alt="Imagen ilustrativa" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="form-card p-4 p-md-5">
            <h3 className="h4 fw-semibold text-center">Regístrate</h3>

            <form noValidate>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" id="nombre" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input type="text" id="apellido" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" id="email" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" id="password" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="password2" className="form-label">Confirmar contraseña</label>
                <input type="password" id="password2" className="form-control" required />
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="terms" required />
                <label className="form-check-label" htmlFor="terms">
                  <span>Acepto <span style={{fontWeight: 'bold'}} >términos y condiciones</span></span>
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="poli" required />
                <label className="form-check-label link" htmlFor="poli">
                  <span>Acepto <span style={{fontWeight: 'bold'}} >Política de tratamiento de datos</span></span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100 submit-btn">
                Registrarme
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
