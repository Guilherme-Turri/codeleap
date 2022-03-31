import React from 'react';
import styles from './ModalUpdate.module.css';
import { GlobalContext } from './GlobalContext';

const ModalUpdate = () => {
  const global = React.useContext(GlobalContext);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const data = JSON.parse(localStorage.getItem('mypost'));

  function handleOK() {
    console.log(data);
    if (!title && !content) {
      global.setModalUpdate(false);
    } else if (title && !content) {
      data[global.id].title = title;
      localStorage.setItem('mypost', JSON.stringify(data));
      global.setModal(false);
      document.location.reload(true);
    } else if (!title && content) {
      data[global.id].content = content;
      localStorage.setItem('mypost', JSON.stringify(data));
      global.setModal(false);
      document.location.reload(true);
    } else {
      data[global.id].title = title;
      data[global.id].content = content;
      localStorage.setItem('mypost', JSON.stringify(data));
      global.setModal(false);
      document.location.reload(true);
    }
  }

  function handleCancel() {
    global.setModalUpdate(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.pop}>
        <label htmlFor="title">
          Title
          <input
            //value={oldData[global.id].title}
            type="text"
            id="title"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="content">
          Content
          <textarea
            //value={oldData[global.id].content}
            rows="6"
            id="content"
            name="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            required
          />
        </label>
        <div className={styles.btn}>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleOK}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdate;
