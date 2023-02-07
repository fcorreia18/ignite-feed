import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from "date-fns";
import PT from "date-fns/locale/pt"
export interface PostProps {
    id?:number,
    author: {
        avatarUrl:string;
        name:string;
        role:string
    },
    content: string[]|string,
    publishedAt: Date;
}
export const Post: React.FC<PostProps> = ({ author, content, publishedAt }) => {
    const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH':'mm'h'",{locale:PT})
    const publishedDateTime = format(publishedAt, "MM/dd/yyyy HH':'mm")
    const publishedDateRelatedFromNow = formatDistanceToNow(publishedAt, {addSuffix:true, locale:PT})
    return (
        <div className={styles.wrapper}>
            <article>
                <header className={styles.header}>
                    <div className={styles.author}>
                        <Avatar
                            hasBorder={true}
                            src={author.avatarUrl}
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
                    <time title={publishedDateFormat} dateTime={publishedDateTime}>
                    {publishedDateRelatedFromNow}
                    </time>
                </header>
                <div className={styles.content}>
                    {
                    content instanceof Array ? content.concat().join(""):content
                }
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
