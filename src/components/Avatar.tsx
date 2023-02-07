import React from 'react';

import styles from './Avatar.module.css';
type Avatar = {
    src:string;
}
export const Avatar: React.FC<Avatar> = (props) => {
  return (
    <img src={props.src} alt="user profile picture" className={styles.avatar}/>
   );
}
