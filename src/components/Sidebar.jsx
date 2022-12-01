import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://source.unsplash.com/random/?Coding/"
        alt=""
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/jusceliadesouza.png"
          alt=""
        />

        <strong>Juscélia de Souza</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
