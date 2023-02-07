import Post from "./Post";
import {Header} from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
function App() {

  return (
    <div className="App">
      <Header/>
     <div className={styles.wrapper}>
        <Sidebar/>
      <main style={{backgroundColor:"red"}}>
      <Post
        author="Francisco Correia"
        content="um post de Francisco"
      />
      <Post
       author="Miguel Antunes"
       content="um post de Miguel"
      />
      </main>
     </div>
    </div>
  )
}

export default App
