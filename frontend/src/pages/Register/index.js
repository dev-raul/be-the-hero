import React from "react";

import { Container, Content, Form } from "./styles";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/logo.svg";

export default function Register() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude a encontrar os casos
            da ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" /> Já tenho cadastro
          </Link>
        </section>
        <Form>
          <input required type="text" placeholder="Nome na ONG" />;
          <input required type="email" placeholder="E-mail" />
          <input required type="text" placeholder="Whatsapp" />
          <div className="input-group">
            <input required type="text" placeholder="Cidade" />
            <input
              required
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              minLength="2"
              maxLength="2"
            />
          </div>
          <button className="button" type="submit">
            CADASTRAR
          </button>
        </Form>
      </Content>
    </Container>
  );
}
