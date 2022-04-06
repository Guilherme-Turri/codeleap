import { useParams } from 'react-router-dom';
import React from 'react';
import styles from './Home.module.css';
import Post from './Post.js';
import CreatePost from './CreatePost.js';
import NewPost from './NewPost.js';
import ModalDelete from './ModalDelete';
import ModalUpdate from './ModalUpdate';

import { GlobalContext } from './GlobalContext';

const userData = JSON.parse(localStorage.getItem('post'));
const myData = JSON.parse(localStorage.getItem('mypost'));

const Home = () => {
  const global = React.useContext(GlobalContext);
  const params = useParams();
  return (
    <div className={styles.main}>
      {global.modal && <ModalDelete />}
      {global.modalUpdate && <ModalUpdate />}

      <div className={styles.container}>
        <CreatePost user={params} />
        <div>
          {myData ? (
            <div>
              {myData
                .map((item, index) => (
                  <div key={index}>
                    <NewPost key={index} id={index} {...item} />{' '}
                  </div>
                ))
                .reverse()}
            </div>
          ) : (
            <p className={styles.first}>Do your first post, {params.name}!</p>
          )}
        </div>
        {userData.map((item) => (
          <div key={item.id}>
            <Post key={item} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
