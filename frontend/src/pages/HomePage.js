import '../styles/components/pages/HomePage.css';
const HomePage = () => {
  return (
    <main className="holder">
      <div>
        <img src="/images/home/img02.jpg" alt="avion" />
      </div>
      <div className="columnas">
        <section className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>Gracias por visitar nuestro sitio web. Ofrecemos soluciones de transporte confiables y rápidas.</p>
        </section>
        <section className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">"Muy conforme con el servicio."</span>
            <span className="autor">Juan Gómez - Empresa X</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
