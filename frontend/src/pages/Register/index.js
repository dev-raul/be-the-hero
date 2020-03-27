import React, { useState } from "react";

import { Container, Content, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await api.post("/ongs", {
        name,
        email,
        whatsapp,
        city,
        uf
      });
      toast.warn(`Seu ID de acesso: ${response.data.id}`);
      navigate("/");
    } catch (err) {
      toast.error("Error ao cadastrar Ong! Revise os seus dados!");
    }
  }

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
        <Form onSubmit={handleRegister}>
          <input
            required
            type="text"
            placeholder="Nome na ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          ;
          <input
            required
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              required
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              minLength="2"
              maxLength="2"
              value={uf}
              onChange={e => setUf(e.target.value)}
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
