import React from 'react';
import styles from './CreatePost.module.css';

//

const CreatePost = ({ user }) => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [btn, setBtn] = React.useState(false);

  const date = new Date();
  const myData = [
    {
      name: user.name,
      title,
      content,
      date,
    },
  ];
  React.useEffect(() => {
    if (title === '' || content === '') {
      setBtn(false);
    } else {
      setBtn(true);
    }
  }, [title, content]);

  function setValues() {
    if (btn) {
      if (!localStorage.getItem('mypost')) {
        localStorage.setItem('mypost', JSON.stringify(myData));
      } else {
        const oldData = JSON.parse(localStorage.getItem('mypost'));
        localStorage.setItem('mypost', JSON.stringify(oldData.concat(myData)));
      }
      document.location.reload(true);
    } else {
      setBtn(false);
    }
  }

  return (
    <div className={styles.container}>
      <header>CodeLeap Network</header>
      <div className={styles.box}>
        <h1>What's on your mind? </h1>
        <div className={styles.data}>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Hello world"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <label htmlFor="title">
            Content
            <textarea
              rows="6"
              id="content"
              name="content"
              placeholder="Comment here"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </label>
          <button
            className={btn ? styles.avalible : styles.notAvalible}
            onClick={setValues}
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
