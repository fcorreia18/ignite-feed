import React from 'react';
import { Trash, ThumbsUp } from "phosphor-react";
import styles from './Comment.module.css';

export const Comment: React.FC = () => {
    return (
        <div className={styles.comment}>
            <img src={`https://avatars.githubusercontent.com/u/61621625?v=4`} alt="user profile picture" className={styles.avatar} />

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
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom, parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
