import React from 'react';

import styles from './Sidebar.module.css';
import user1 from '../assets/user-1.svg';
import profileBackground from '../assets/profile-background.svg';

export const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <img src={profileBackground} alt="profile background image" className={styles.cover} />
            <div className={styles.profile} >
                <img src={`https://avatars.githubusercontent.com/u/61621625?v=4`} alt="user profile picture" className={styles.avatar} />
                <strong>
                    Francisco
                </strong>
                <span>
                    Full Stack Developer
                </span>
            </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
