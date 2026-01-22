import "../assets/styles/rutaFormacionNet.css";
import HeaderFondo from '../assets/HeaderFondo.jpg'
import formacionNet1 from '../assets/formacionNet1.png'
import formacionNet2 from '../assets/formacionNet2.png'
import formacionNet3 from '../assets/formacionNet3.png'

export default function RutaFormacionNet() {
  return (
    <section className="aprende">
      <div className="aprende__top">
        <h2 className="aprende__title">Aprende a construir</h2>

        <div className="aprende__features">
          <div className="feature">
            <div className="feature__icon">
              <img
                src={formacionNet1}
                alt="Aplicaciones Web"
              />
            </div>
            <p className="feature__text">Aplicaciones Web</p>
          </div>

          <div className="feature">
            <div className="feature__icon">
              <img
                src={formacionNet2}
                alt="Web API"
              />
            </div>
            <p className="feature__text">Web API</p>
          </div>

          <div className="feature">
            <div className="feature__icon">
              <img
                src={formacionNet3}
                alt="Aplicaciones Seguras"
              />
            </div>
            <p className="feature__text">Aplicaciones Seguras</p>
          </div>
        </div>
      </div>

     
      <div
        className="banner-simple"
        style={{ backgroundImage: `url(${HeaderFondo})` }} // o pon aquí otra imagen si deseas
      >
        <p className="banner-simple__sub">
          ASP.NET, el framework de desarrollo web que permite crear aplicaciones
          web potentes, seguras y escalables de manera fácil, rápida y eficiente.
        </p>
        <h3 className="banner-simple__title">
          COMIENZA TU VIAJE PARA CONVERTIRTE EN DESARROLLADOR
        </h3>
      </div>

    </section>
  );
}
