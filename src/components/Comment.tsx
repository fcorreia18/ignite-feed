import React, { useState } from 'react';
import { Trash, ThumbsUp } from "phosphor-react";
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
interface Comment{
    content:string
    onDeleteComment(content:string):void
}
export const Comment: React.FC<Comment> = ({content, onDeleteComment}) => {
    function handleDeleteComment(){
        onDeleteComment(content);
    }
    const [commentLikes, setCommentLikes] = useState<number>(0);
    function handleCommentLikes(){
        setCommentLikes(commentLikes + 1)
    }
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} src={`https://avatars.githubusercontent.com/u/61621625?v=4`} 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.authorAndTime}>
                        <div>
                            <strong>
                                Francisco(voce)
                            </strong>
                            <time title="07 de fevereiro às 10:10h" dateTime="2023-02-07 10:10">
                                cerca de 1h atrás
                            </time>
                        </div>
                        <button title='Deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleCommentLikes}>
                        <ThumbsUp />
                        Aplaudir <span>{commentLikes}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
