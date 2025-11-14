import '../styles/components/pages/ServiciosPage.css';

const ServiciosPage = () => {
return (
    <main class="holder">
    <h2>Servicios</h2>
    <div class="servicio">
      <img src="images/servicios/ferroviario.jpg" alt="tren"/>
      <div class="info">
        <h4>Transporte de Ferroviario</h4>
        <p>Ofrecemos transporte de carga en todo el territorio nacional.</p>
      </div>
    </div>
    <div class="servicio">
      <img src="images/servicios/aereo.jpg" alt="tren"/>
      <div class="info">
        <h4>Transporte de Aereo</h4>
        <p>Ofrecemos transporte de carga en todo el territorio nacional.</p>
      </div>
    </div>
    <div class="servicio">
      <img src="images/servicios/maritimo.jpg" alt="tren"/>
      <div class="info">
        <h4>Transporte de Marítimo</h4>
        <p>Ofrecemos transporte de carga en todo el territorio nacional.</p>
      </div>
    </div>
    <div class="servicio">
      <img src="images/servicios/terrestre.jpg" alt="tren"/>
      <div class="info">
        <h4>Transporte de Terrestre</h4>
        <p>Ofrecemos transporte de carga en todo el territorio nacional.</p>
      </div>
    </div>
  </main>
)};

export default ServiciosPage;