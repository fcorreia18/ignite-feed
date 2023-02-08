import React, { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css';
interface Avatar extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder:boolean;
}
export const Avatar: React.FC<Avatar> = ({hasBorder=true, ...props}) => {
  return (
    <img 
        className={hasBorder?styles.avatarWithBorder:styles.avatar}
        {...props}
    />
   );
}
