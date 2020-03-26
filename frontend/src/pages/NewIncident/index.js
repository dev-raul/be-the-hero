import React from "react";

import { Container, Content, Form } from "./styles";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="" />
          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um heroi pra resolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <Form>
          <input required type="text" placeholder="Titulo do caso" />;
          <textarea placeholder="Descrição" />
          <input required type="text" placeholder="Valor em reais" />
          <button className="button" type="submit">
            CADASTRAR
          </button>
        </Form>
      </Content>
    </Container>
  );
}
