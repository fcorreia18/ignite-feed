import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
interface PostProps {
    author: {
        avatarURL:string;
        name:string;
        role:string
    }
    content: string[],
    publishedAt: Date;
}

export const Post: React.FC<PostProps> = ({ author, content, publishedAt }) => {
    return (
        <div className={styles.wrapper}>
            <article>
                <header className={styles.header}>
                    <div className={styles.author}>
                        <Avatar
                            hasBorder={true}
                            src={author.avatarURL}//`https://avatars.githubusercontent.com/u/61621625?v=4`
                        />
                        <div>
                            <strong>
                                {author.name}
                            </strong>
                            <span>
                            {author.role}
                            </span>
                        </div>
                    </div>
                    <time title="07 de fevereiro às 10:10h" dateTime="2023-02-07 10:10">
                    {publishedAt.getDate()}
                    </time>
                </header>
                <div className={styles.content}>
                    {/* <p>
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
                    </p> */}
                    {content}
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea placeholder="Deixe um comentário" />

                    <footer>
                        <button type="submit">comentar</button>
                    </footer>
                </form>
                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </article>
        </div>

    )
}
