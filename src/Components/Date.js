import React from 'react';
import styles from './Date.module.css';
const Date = ({ date }) => {
  const oldDate = new window.Date(date);
  const actualDate = new window.Date();
  let diffDate = Math.abs(actualDate.getTime() - oldDate.getTime());
  let number;
  let string = '';

  function setDate() {
    if (diffDate > 0 && diffDate < 2000) {
      number = '';
      string = 'now';
    } else if (diffDate > 2000 && diffDate < 60000) {
      number = Math.round(diffDate / 1000);
      string = ' seconds ago';
    } else if (diffDate >= 60000 && diffDate < 120000) {
      number = Math.round(diffDate / 1000 / 60);
      string = ' minute ago ';
    } else if (diffDate >= 120000 && diffDate < 3600000) {
      number = Math.round(diffDate / 1000 / 60);
      string = ' minutes ago';
    } else if (
      diffDate >= 3600000 &&
      diffDate <= 86400000 &&
      oldDate.getDay() !== actualDate.getDay()
    ) {
      number = Math.floor(diffDate / 1000 / 60 / 60) % 24;
      string = ' hours ago ';
    } else if (
      diffDate >= 3600000 &&
      diffDate >= 7200000 &&
      oldDate.getDay() !== actualDate.getDay()
    ) {
      number = Math.ceil(
        Math.abs(oldDate - actualDate) / (1000 * 60 * 60 * 24),
      );
      string = ' days ago';
    }
  }

  setDate();
  console.log(number);
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        {number}
        {string}
      </div>
    </div>
  );
};
export default Date;
