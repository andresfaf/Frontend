
import './novedades.css';
// Reemplaza por tus imágenes reales
import ImgHero from "../assets/HeaderFondo.jpg";
import ImgA from "../assets/HeaderFondo.jpg";
import ImgB from "../assets/HeaderFondo.jpg";
import ImgC from "../assets/HeaderFondo.jpg";
import ImgD from "../assets/HeaderFondo.jpg";

export default function Novedades() {
  return (
    <>
      <section className="container my-3">
        <h2 className="h4 fw-semibold mb-4">Novedades</h2>

        {/* Grid principal */}
        <div className="row g-3 px-4">
          {/* IZQUIERDA: 12 en md, 6 en lg */}
          <div className="col-12 col-md-12 col-lg-6">
            {/* Imagen con bordes redondeados */}
            <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-light">
              <img src={ImgHero} alt="Bienvenidos a izyAcademy" />
            </div>

            {/* Banda/título a ancho completo */}
            <div className="nvd-full-title text-white fw-semibold px-3 py-2 my-2 text-center">
              Bienvenidos a izyAcademy
            </div>

            {/* Texto justificado */}
            <p className="mb-0 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod urna et auctor posuere.
              Morbi vitae posuere lorem. Quisque in commodo lacus. Maecenas rhoncus, nibh id facilisis convallis,
              velit nisl gravida purus, vitae euismod turpis mi id nunc. Aliquam commodo, nisl et bibendum
              pellentesque, magna nibh pulvinar justo, eget dapibus eros lorem in sem.
            </p>
          </div>

          {/* DERECHA: 12 en md (debajo), 6 en lg */}
          <div className="col-12 col-md-12 col-lg-6">
            <div className="row g-3">
              {/* 1 */}
              <div className="col-12 col-md-6 col-600-12">
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-light">
                  <img src={ImgA} alt="Generación de comunidad" loading="lazy" />
                </div>
                <div className="nvd-full-title text-white fw-semibold px-3 py-2 my-2 text-center">
                  Generación de comunidad
                </div>
                <p className="mb-0 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna vitae magna cursus sagittis.
                  Suspendisse eget fermentum dui. Etiam placerat erat non tempus lacinia.
                </p>
              </div>

              {/* 2 */}
              <div className="col-12 col-md-6 col-600-12">
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-light">
                  <img src={ImgB} alt="Transferencia de conocimiento" loading="lazy" />
                </div>
                <div className="nvd-full-title text-white fw-semibold px-3 py-2 my-2 text-center">
                  Transferencia de conocimiento
                </div>
                <p className="mb-0 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, metus a tristique gravida,
                  leo lectus aliquam diam, non venenatis odio elit vel massa.
                </p>
              </div>

              {/* 3 */}
              <div className="col-12 col-md-6 col-600-12">
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-light">
                  <img src={ImgC} alt="Certificaciones e insignias" loading="lazy" />
                </div>
                <div className="nvd-full-title text-white fw-semibold px-3 py-2 my-2 text-center">
                  Certificaciones e insignias
                </div>
                <p className="mb-0 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur arcu vel facilisis
                  condimentum. Suspendisse potenti. Praesent suscipit sapien a nisl dapibus.
                </p>
              </div>

              {/* 4 */}
              <div className="col-12 col-md-6 col-600-12">
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-light">
                  <img src={ImgD} alt="Apropiación del conocimiento" loading="lazy" />
                </div>
                <div className="nvd-full-title text-white fw-semibold px-3 py-2 my-2 text-center">
                  Apropiación del conocimiento
                </div>
                <p className="mb-0 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia curae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
