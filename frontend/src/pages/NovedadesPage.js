import { useEffect, useState } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/NovedadesPage.css';


const NovedadesPage = () => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:4000/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  }, []);

  return (
    <section className='holder'>
      {loading ? (
        <p>Cargando novedades...
        </p>
      ) : (
        <div>
          {novedades.map(item => (
            <NovedadItem
              key={item.id}
              titulo={item.titulo}
              subtitulo={item.subtitulo}
              cuerpo={item.cuerpo}
              imagen={item.imagen}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default NovedadesPage;
