import { Header } from "./components/Header";

import Post from "./Post";

export default function App() {
  return (
    <div>
      <Header />

      <Post
        author="Jane Cooper"
        content="Aute minim et amet minim velit ex cillum voluptate."
      />

      <Post
        author="Devon Lane"
        content="Consectetur magna mollit aliqua fugiat mollit velit elit enim minim eiusmod tempor."
      />
    </div>
  );
}
