import React, { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css';


const ContactoPage = (props) => {
  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await
     axios.post('http://localhost:4000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  }

  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form className="formulario" onSubmit={handleSubmit}>
          <p>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" required value={formData.nombre} onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" name="telefono" id="telefono" required value={formData.telefono} onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" required value={formData.mensaje} onChange={handleChange}></textarea>
          </p>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}
          <p className="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vías de comunicación</h2>
        <p>Tambien puede contactarse con nosotros utilizando los siguientes medios</p>
        <ul>
          <li>Teléfono: 011-1234-5678</li>
          <li>Email: contacto@transportesx.com</li>
          <li>Facebook</li>
          <li>Whatsapp</li>
          <li>Instagram</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
