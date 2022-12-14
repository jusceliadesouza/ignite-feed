import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/jusceliadesouza.png",
      name: "Juscรฉlia de Souza",
      role: "Web Developer",
    },
    content: [
      { type: "paraghaph", content: "Fala galeraa ๐" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐",
      },
      { type: "link", content: "๐ jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-01 15:16:12"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO at @Rocketseat",
    },
    content: [
      { type: "paraghaph", content: "Fala galeraa ๐" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐",
      },
      { type: "link", content: "๐ jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-01 13:16:22"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator at @Rocketseat",
    },
    content: [
      { type: "paraghaph", content: "Fala pessoal ๐" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfรณlio. Foi um baita desafio criar todo o design e codar na unha, mas consegui ๐ช๐ป",
      },
      {
        type: "paragraph",
        content: "Acesse e deixe seu feedback",
      },
      { type: "link", content: "๐ devonlane.design" },
    ],
    publishedAt: new Date("2022-12-01 10:16:32"),
  },
];

export function App(props) {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {/* Listagem de posts */}
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
