import React from 'react';

import styles from './Avatar.module.css';
type Avatar = {
    src:string;
    hasBorder:boolean;
}
export const Avatar: React.FC<Avatar> = (props) => {
  return (
    props.hasBorder ?
    <img src={props.src} alt="user profile picture" className={styles.avatar}/>
    : 
    <img src={props.src} alt="user profile picture"/>

   );
}
