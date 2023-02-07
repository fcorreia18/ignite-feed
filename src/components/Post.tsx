import styles from "./Post.module.css"
interface PostProps {
    author: string
    content: string
}

export const Post: React.FC<PostProps> = ({ author, content }) => {
    return (
        <div className={styles.wrapper}>
            <article>
                <header className={styles.header}>
                    <div className={styles.author}>
                        <img
                            src={`https://avatars.githubusercontent.com/u/61621625?v=4`}
                            alt="user profile picture"
                            className={styles.avatar}
                        />
                        <div>
                            <strong>
                                {author}
                            </strong>
                            <span>
                                Full Stack Developer
                            </span>
                        </div>
                    </div>
                    <time title="07 de fevereiro às 10:10h" dateTime="2023-02-07 10:10">
                        publicado há 1h
                    </time>
                </header>
                <div className={styles.content}>
                    <p>
                        Fala galeraa 👋
                    </p>
                    <p>
                        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                    </p>
                    <p>
                        👉<a href="#"> &nbsp; jane.design/doctorcare</a>
                    </p>
                    <p>
                        <a href="#">#novoprojeto&nbsp; </a>
                        <a href="#">#nlw &nbsp;</a>
                        <a href="#">#rocketseat</a>
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea placeholder="Deixe um comentário" />

                    <footer>
                        <button type="submit">comentar</button>
                    </footer>
                </form>
            </article>

        </div>
    )
}
