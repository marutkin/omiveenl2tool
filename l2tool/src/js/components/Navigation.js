
import React from 'react';
import logo from './../../images/logo.png';
import styles from './../../sass/styles.scss';

function NavigationItem(props) {

  let navClass = styles["nav-container__item"];

  if (props.isFirst) {
    navClass += ` ${styles["nav-container__item--active"]}`;
  }

  return (
    <div onClick={(e) => props.clickHandler(props.name, e) } className={navClass}>
      {props.name}
    </div>);

}

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <nav className={styles["nav-container"]}>
        <img className={styles["nav-container__image"]} src={logo} alt="Logo" />
        { this.props.sections.map((item, index) => <NavigationItem isFirst={!Boolean(index)} key={index} name={item} clickHandler={this.props.navigationClick}/>) }
      </nav>
    );
  }

}

export default Navigation;
