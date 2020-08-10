/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import "./styles.css";
import whatsappImg from "../../assets/images/icons/whatsapp.svg";
import api from '../../services/api';

export interface Teacher {
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  cost: number;
  id: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img
          src={teacher.avatar}
          alt={teacher.name}
        />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/hora:
          <strong>
            R$
            {teacher.cost}
          </strong>
        </p>

        <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappImg} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>

    </article>
  )};

export default TeacherItem;
