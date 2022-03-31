import React from 'react';
import styles from './ModalDelete.module.css';
import { GlobalContext } from './GlobalContext';

const ModalDelete = () => {
  const global = React.useContext(GlobalContext);
  function handleCancel() {
    global.setModal(false);
  }
  function handleOk() {
    const oldData = JSON.parse(localStorage.getItem('mypost'));
    oldData.splice(global.id, 1);
    localStorage.setItem('mypost', JSON.stringify(oldData));
    global.setModal(false);
    document.location.reload(true);
  }
  return (
    <div className={styles.container}>
      <div className={styles.pop}>
        <p>Are you sure to delete this item?</p>
        <div className={styles.btn}>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleOk}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
