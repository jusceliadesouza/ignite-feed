import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className=""
            src="https://source.unsplash.com/random/?People Face/"
            alt=""
          />

          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.office}</span>
          </div>

          <time title="01 de dezembro às 00:39h" dateTime="2022-12-01 00:39:12">
            Publicado há 1h
          </time>
        </div>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>{" "}
        </p>
      </div>
    </article>
  );
}
