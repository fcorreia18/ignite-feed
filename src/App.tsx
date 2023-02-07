import { Post, PostProps } from "./components/Post";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts: PostProps[] = [
{
  id: 1,
  author: {
    avatarUrl: `https://avatars.githubusercontent.com/u/61621625?v=4`,
    name: "Francisco Correia",
    role: "FullStack Developer"
  },
  content: `Fala pessoal 👋  Acabei de subir mais um projeto no meu github. É um projeto que fiz no
   NLW Return, evento da Rocketseat.`,
  publishedAt: new Date("2023-02-07 10:10")
},
{
  id: 2,
  author: {
    avatarUrl: `https://avatars.githubusercontent.com/u/61626420?v=4`,
    name: "Pedro Makengo",
    role: "FullStack Developer"
  },
  content: [`Fala pessoal 👋  Acabei de subir mais um projeto no meu github. É um projeto que fiz no
  NLW Return, evento da Rocketseat.`],
  publishedAt: new Date("2023-02-07 10:10")
}

]
function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main >
          {posts? posts.map((post)=>{
            return <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />;
          }): "Sem posts disponíveis"}
          
        </main>
      </div>
    </div>
  )
}

export default App
