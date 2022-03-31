import React from 'react';
import styles from './Login.module.css';
import { Data } from './Data.js';

const Login = () => {
  const [name, setName] = React.useState('');
  function handleClick() {
    if (name !== '') {
      localStorage.setItem('post', JSON.stringify(Data));
      window.location.href = `http://localhost:3000/home/${name}`;
    }
  }
  function handleKey(e) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      handleClick();
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.box}>
        <div className={styles.title}>Welcome to codeleap</div>
        <label htmlFor="name">
          Please enter your username
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jhon doe"
            onChange={(e) => setName(e.target.value)}
            onKeyUp={handleKey}
            on
          />
        </label>
        <button
          className={name ? styles.avalibe : styles.notAvalibe}
          onClick={handleClick}
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Login;
