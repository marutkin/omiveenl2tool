
import React from 'react';
import styles from './../../sass/styles.scss';

function NavigationItem(props) {
  return <div onClick={() => props.clickHandler(props.name) } className={styles["nav-container__item"]}>{props.name}</div>;
}

function Navigation(props) {
  return (
    <nav className={styles["nav-container"]}>
      { props.sections.map((item, i) => <NavigationItem key={i} name={item} clickHandler={props.navigationClick}/>) }
    </nav>
  );
}

export default Navigation;
