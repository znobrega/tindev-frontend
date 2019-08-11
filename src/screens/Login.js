import React, { useState } from "react";

import api from "../sevices/api";

import Logo from "../assets/logo.svg";

import "./Login.css";

function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();

    // Confirm with api
    // const response = await api.post("/dev", {
    //   username
    // });

    //const { _id } = response.data;

    const _id = 123123;
    history.push(`/dev/${_id}`);
  }

  function handleInputChange(e) {
    setUsername(e.target.value);
  }

  return (
    <div className='login-container'>
      <img src={Logo} alt='Tindev' />
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          placeholder='Digite seu usuário do github'
          value={username}
          onChange={handleInputChange}
        />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
