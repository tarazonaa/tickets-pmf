import React, { useState } from "react";

const Registrarse = () => {
  const [datos, setDatos] = useState({
    username: "",
    password: "",
    fullName: "",
    role: "",
  });

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSendData = async () => {
    // Convert the form data to JSON
    const request = await new Request(
      "https://backend-tickets-pmf.glitch.me/registrarse",
      {
        method: "POST",
        body: JSON.stringify(datos),
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    );
    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
    } catch {
      throw new Error("No se pudo registrar el usuario");
    }
  };

  return (
    <div>
      <h2>Registro de nuevos usuarios</h2>
      <form>
        <div>
          <label htmlFor="username">Usuario: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={datos.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={datos.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="fullName">Nombre Completo: </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={datos.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">Rol: </label>
          <input
            type="text"
            id="role"
            name="role"
            value={datos.role}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSendData}>
            Crear Usuario
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registrarse;
