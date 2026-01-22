import "../assets/styles/registro.css";
import Foto from "../assets/HeaderFondo.jpg";
import { useState } from "react";
import { URL } from "../utils/constantes";
 
export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    password2: "",
    terms: false,
    poli: false
  });
 
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
 
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };
 
  const validate = () => {
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!form.apellidos.trim()) newErrors.apellidos = "El apellido es obligatorio";
    if (!form.email.trim()) newErrors.email = "El correo es obligatorio";
    if (!form.password) newErrors.password = "La contraseña es obligatoria";
    if (form.password.length < 6) newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    if (form.password !== form.password2) newErrors.password2 = "Las contraseñas no coinciden";
    if (!form.terms) newErrors.terms = "Debes aceptar los términos";
    if (!form.poli) newErrors.poli = "Debes aceptar la política de datos";
    return newErrors;
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
 
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch(`${URL}/usuarios/registro`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: form.nombre,
            apellidos: form.apellidos,
            email: form.email,
            password: form.password
          })
        });
 
        if (!response.ok) {
          throw new Error("Por favor validar los datos del formulario");
        }
 
        const data = await response.json();
        alert(`Usuario registrado con éxito: ${data.nombre}`);
        // Limpiar formulario
        setForm({
          nombre: "",
          apellidos: "",
          email: "",
          password: "",
          password2: "",
          terms: false,
          poli: false
        });
        setErrors({});
      } catch (error) {
        console.error("Error al registrar:", error.message);
        alert(`Error al registrar: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };
 
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
            <form noValidate onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" name="nombre" className="form-control" value={form.nombre}
                  onChange={handleChange} required/>
                  {errors.nombre && <small className="text-danger">{errors.nombre}</small>}
              </div>
 
              <div className="mb-3">
                <label htmlFor="apellidos" className="form-label">Apellido</label>
                <input type="text" name="apellidos" className="form-control" value={form.apellidos}
                  onChange={handleChange} required/>
                  {errors.apellidos && (
                  <small className="text-danger">{errors.apellidos}</small>
                )}
              </div>
 
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" name="email" className="form-control"  value={form.email}
                  onChange={handleChange} required/>
                  {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" name="password" className="form-control" value={form.password}
                  onChange={handleChange} required/>
                  {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                    )}
              </div>
 
              <div className="mb-3">
                <label htmlFor="password2" className="form-label">Confirmar contraseña</label>
                <input type="password" name="password2" className="form-control" value={form.password2}
                  onChange={handleChange} required/>
                  {errors.password2 && (
                  <small className="text-danger">{errors.password2}</small>
                    )}
              </div>
 
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" name="terms" checked={form.terms}
                  onChange={handleChange} required/>
                <label className="form-check-label">
                  Acepto <strong>términos y condiciones</strong>
                </label>
                {errors.terms && <small className="text-danger d-block">{errors.terms}</small>}
              </div>
 
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" name="poli"  checked={form.poli}
                  onChange={handleChange} required/>
                <label className="form-check-label link" htmlFor="poli">
                  <span>Acepto <span style={{fontWeight: 'bold'}} >Política de tratamiento de datos</span></span>
                </label>
              </div>
 
              <button type="submit" className="btn btn-primary w-100 submit-btn" disabled={loading}>
                {loading ? "Registrando..." : "Registrarme"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}