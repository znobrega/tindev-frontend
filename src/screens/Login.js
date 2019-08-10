import React, { useState } from "react";

import Logo from "../assets/logo.svg";

import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  // 41:08
  function handleInputChange(e) {
    setUsername(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
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
        <button>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
