import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import { Container, Header, List } from "./styles";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import { toast } from "react-toastify";
export default function Profile() {
  const navigate = useNavigate();
  const ongId = localStorage.getItem("@HERO:ongId");
  const ongName = localStorage.getItem("@HERO:ongName");

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function getIncidents() {
      const response = await api.get("/profile", {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(response.data);
    }

    getIncidents();
  }, []);

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id != id));
      toast.success("Sucesso ao deletar o caso");
    } catch (err) {
      toast.error("Error ao deletar o caso");
    }
  }

  return (
    <div>
      <Container>
        <Header>
          <img src={logo} alt="Be the Hero" />
          <span>Bem vindo, {ongName}</span>
          <Link className="button" to="/incident/new">
            Cadastrar novo caso
          </Link>
          <button type="button" onClick={handleLogout}>
            <FiPower size={18} color="#E02047" />
          </button>
        </Header>

        <h1>Casos cadastrados</h1>

        <List>
          {incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO: </strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p> {incident.description} </p>
              <strong>VAOR:</strong>
              <p>R$ {incident.value} </p>

              <button
                type="button"
                onClick={() => handleDeleteIncident(incident.id)}
              >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </List>
      </Container>
    </div>
  );
}
