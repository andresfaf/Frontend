
import Sena from '../assets/Sena.png';
import Brightest from '../assets/Brightest.png';
import CertiProf from '../assets/CertiProf.jpg';
import Credly from '../assets/Credly.jpg';
import Formarte from '../assets/Formarte.png';
import ScrumStudy from '../assets/ScrumStudy.jpg';
import InterSoftware from '../assets/InterSoftware.jpg';
import Arcitura from '../assets/Arcitura.png';

import '../assets/styles/aliados.css';

function Aliados() {
  return (
    <>
      <section className="container">
        <div className="row g-2 px-4">
          <div className="col-12">
            <h2 className="h4 fw-semibold text-center">Aliados</h2>
          </div>
          <div className="col-12">
            <h6 className="text-center">
              Nuestros entrenamientos, procesos formativos y certificaciones cuentan con el respaldo de empresas que confían en nosotros.
            </h6>
          </div>
        </div>
        <div className="row g-3 allies-row mt-2">
          <div className="ally-col col-6 col-sm-4 col-md-3 col-lg-1-8">
            <div className="ally-box">
              <img src={CertiProf} alt="CertiProf" loading="lazy" />
            </div>
          </div>

          <div className="ally-col col-6 col-sm-4 col-md-3 col-lg-1-8">
            <div className="ally-box">
              <img src={Arcitura} alt="Arcitura" loading="lazy" />
            </div>
          </div>

          <div className="ally-col col-6 col-sm-4 col-md-3 col-lg-1-8">
            <div className="ally-box">
              <img src={Formarte} alt="Formarte" loading="lazy" />
            </div>
          </div>

          <div className="ally-col col-6 col-sm-4 col-md-3 col-lg-1-8">
            <div className="ally-box">
              <img src={Credly} alt="Credly" loading="lazy" />
            </div>
          </div>

          <div className="ally-col col-6 col-sm-4 col-md-3 col-lg-1-8">
            <div className="ally-box">
              <img src={ScrumStudy} alt="ScrumStudy" loading="lazy" />
            </div>
          </div>

          <div className="ally-col col-6 col-sm-4 col-md-3 col-lg-1-8">
            <div className="ally-box">
              <img src={InterSoftware} alt="InterSoftware" loading="lazy" />
            </div>
          </div>

          <div className="ally-col col-6 col-sm-4 col-md-3 col-lg-1-8">
            <div className="ally-box">
              <img src={Brightest} alt="Brightest" loading="lazy" />
            </div>
          </div>

          <div className="ally-col col-6 col-sm-4 col-md-3 col-lg-1-8">
            <div className="ally-box">
              <img src={Sena} alt="Sena" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aliados;
