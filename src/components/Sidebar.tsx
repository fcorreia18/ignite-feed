import React from 'react';
import { PencilLine } from "phosphor-react";
import styles from './Sidebar.module.css';
import profileBackground from '../assets/profile-background.svg';
import { Avatar } from './Avatar';

export const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <img src={profileBackground} alt="profile background image" className={styles.cover} />
            <div className={styles.profile} >
                <Avatar src={`https://avatars.githubusercontent.com/u/61621625?v=4`}/>
                <strong>
                    Francisco
                </strong>
                <span>
                    Full Stack Developer
                </span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine height={30} width={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
