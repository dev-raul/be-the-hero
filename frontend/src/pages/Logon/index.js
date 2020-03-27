import React, { useState } from "react";

import { FiLogIn } from "react-icons/fi";
import { Container, FormContainer } from "./styles";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import heroes from "../../assets/heroes.png";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Logon() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  async function handleLogon(e) {
    e.preventDefault();

    try {
      const { data } = await api.post("/session", {
        id
      });

      localStorage.setItem("@HERO:ongId", id);
      localStorage.setItem("@HERO:ongName", data.name);
      navigate("/profile");
    } catch (err) {
      toast.error("Falha no login, tente novamente!");
    }
  }

  return (
    <Container>
      <FormContainer>
        <img src={logo} alt="" />
        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>
          <input
            type="text"
            placeholder="Sua ID"
            cvalue="id"
            required
            onChange={e => setId(e.target.value)}
          />
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
