import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import { Container, Header, List } from "./styles";

import logo from "../../assets/logo.svg";

export default function Profile() {
  return (
    <div>
      <Container>
        <Header>
          <img src={logo} alt="Be the Hero" />
          <span>Bem vindo, APAD</span>
          <Link className="button" to="/incident/new">
            Cadastrar novo caso
          </Link>
          <button type="button">
            <FiPower size={18} color="#E02047" />
          </button>
        </Header>

        <h1>Casos cadastrados</h1>

        <List>
          <li>
            <strong>CASO: </strong>
            <p>Caso teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p> Descrição Teste </p>
            <strong>VAOR:</strong>
            <p>R$ 120.00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASO: </strong>
            <p>Caso teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p> Descrição Teste </p>
            <strong>VAOR:</strong>
            <p>R$ 120.00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASO: </strong>
            <p>Caso teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p> Descrição Teste </p>
            <strong>VAOR:</strong>
            <p>R$ 120.00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        </List>
      </Container>
    </div>
  );
}
