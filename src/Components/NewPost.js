import React from 'react';
import deleteimg from '../Assets/delete-svgrepo-com.svg';
import editimg from '../Assets/edit-svgrepo-com.svg';
import Date from './Date.js';
import { GlobalContext } from './GlobalContext';
import styles from './NewPost.module.css';

const NewPost = ({ name, title, content, date, id }) => {
  const global = React.useContext(GlobalContext);

  function handlePostDelete() {
    global.setModal(true);
    window.scrollTo(0, 0);
    global.setId(id);
  }
  function handlePostUpdate() {
    global.setModalUpdate(true);
    window.scrollTo(0, 0);
    global.setId(id);
  }
  return (
    <div className={styles.first}>
      <div className={styles.container}>
        <div className={styles.header}>
          {title}
          <div className={styles.actions}>
            <div className={styles.delete} onClick={handlePostDelete}>
              <img src={deleteimg} alt="Delete logo" />
            </div>
            <div className={styles.update} onClick={handlePostUpdate}>
              {' '}
              <img src={editimg} alt="edit logo" />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.description}>
            <span>@{name}</span>
            <div className={styles.date}>
              <Date date={date} />
            </div>
          </div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
