import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from "date-fns";
import PT from "date-fns/locale/pt"
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
export interface PostProps {
    id?:number,
    author: {
        avatarUrl:string;
        name:string;
        role:string
    },
    content: {
        type:string,
        content:string;
    }[]
    publishedAt: Date;
}
export const Post: React.FC<PostProps> = ({ author, content, publishedAt }) => {
    const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH':'mm'h'",{locale:PT})
    const publishedDateTime = format(publishedAt, "MM/dd/yyyy HH':'mm")
    const publishedDateRelatedFromNow = formatDistanceToNow(publishedAt, {addSuffix:true, locale:PT})
    
    const [comments, setComments] = useState(["Muito bom, parabéns!!"])
    const [newCommentText, setNewCommentText] = useState("")

    function handleCreateNewComment(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText("");
    }

    function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }
    function deleteComment(content:string){
    }
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
                    content.map(line=>{
                        return line.type ==="paragraph"? <p key={line.content}>{line.content}</p> : <a href="#" key={line.content}> {line.content} </a>
                    })
                }
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                    name="comment" 
                    placeholder="Deixe um comentário" 
                    value={newCommentText}
                    onChange={handleNewCommentText}
                    />

                    <footer>
                        <button type="submit">comentar</button>
                    </footer>
                </form>
                <div className={styles.commentList}>
                   {comments?.map((content)=> {
                   return <Comment 
                        key={content} 
                        content={content} 
                        onDeleteComment={deleteComment}
                   />
                   })}
                </div>
            </article>
        </div>

    )
}
