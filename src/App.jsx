import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Jane Cooper"
            content="Officia exercitation laboris cupidatat mollit mollit sunt dolor consequat ea eiusmod culpa do voluptate."
          />

          <Post
            author="Devon Lane"
            content="Ut id amet et aliqua qui dolor irure proident amet aute."
          />
        </main>
      </div>
    </div>
  );
}
