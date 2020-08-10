/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import api from "../../services/api";

function Landing() {
  const [totalConnection, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("/connections").then((serverResponse) => {
      const { total } = serverResponse.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={landingImg} alt="plataforma de estudos" />

        <div className="buttons-container">
          <Link to="study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de
          {" "}
          {totalConnection}
          {" "}
          conexões já realizadas!
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
