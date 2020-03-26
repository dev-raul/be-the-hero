import React from "react";

import { FiLogIn } from "react-icons/fi";
import { Container, FormContainer } from "./styles";

import logo from "../../assets/logo.svg";
import heroes from "../../assets/heroes.png";

import { Link } from "react-router-dom";

export default function Logon() {
  return (
    <Container>
      <FormContainer>
        <img src={logo} alt="" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="Sua ID" />
          <button className="button" type="submit">
            ENTRAR
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" /> Não tenho cadastro
          </Link>
        </form>
      </FormContainer>
      <img src={heroes} alt="" />
    </Container>
  );
}
