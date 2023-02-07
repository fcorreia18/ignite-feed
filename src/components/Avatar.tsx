import React from 'react';

import styles from './Avatar.module.css';
type Avatar = {
    src:string;
    hasBorder:boolean;
}
export const Avatar: React.FC<Avatar> = ({hasBorder=true, src}) => {
  return (
    <img src={src} 
        alt="user profile picture" 
        className={hasBorder?styles.avatarWithBorder:styles.avatar}
    />
   );
}
