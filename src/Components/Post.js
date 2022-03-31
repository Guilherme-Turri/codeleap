import React from 'react';
import styles from './Post.module.css';
import Date from './Date.js';
const Post = ({ name, date, coment }) => {
  return (
    <div className={styles.container}>
      <header>Another Post Here</header>
      <div className={styles.box}>
        {}
        <div className={styles.description}>
          <span>@{name}</span>
          <div className={styles.date}>
            <Date date={date} />
          </div>
        </div>
        <p>{coment}</p>
      </div>
    </div>
  );
};

export default Post;
