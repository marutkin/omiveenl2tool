
import React from 'react';
import logo from './../../images/logo.png';
import styles from './../../sass/styles.scss';

function NavigationItem(props) {
  return <div onClick={() => props.clickHandler(props.name) } className={styles["nav-container__item"]}>{props.name}</div>;
}

function Navigation(props) {
  return (
    <nav className={styles["nav-container"]}>
      <img className={styles["nav-container__image"]} src={logo} alt="Logo" />
      { props.sections.map((item, i) => <NavigationItem key={i} name={item} clickHandler={props.navigationClick}/>) }
    </nav>
  );
}

export default Navigation;
