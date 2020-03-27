import React, { useState } from "react";

import { Container, Content, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import { toast } from "react-toastify";

export default function NewIncident() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const ongId = localStorage.getItem("@HERO:ongId");
    try {
      await api.post(
        "/incidents",
        {
          title,
          description,
          value
        },
        {
          headers: {
            Authorization: ongId
          }
        }
      );

      navigate("/profile");
      toast.success("Caso criado com sucesso!");
    } catch (err) {
      toast.error("Verifique os dados!");
    }
  }

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
        <Form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          ;
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            required
            type="number"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">
            CADASTRAR
          </button>
        </Form>
      </Content>
    </Container>
  );
}
