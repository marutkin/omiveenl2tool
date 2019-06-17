
import React from "react";
import logo from "../../images/logo.png";
import styles from "../../sass/styles.scss";

function NavigationItem(props) {

  const [ itemStyle, itemStyleActive ] = [ styles["nav-container__item"], styles["nav-container__item--active"] ];
  const navClass = props.isFirst ? `${itemStyle} ${itemStyleActive}` : itemStyle;

  function handleNavItemClick(e) {
    props.clickHandler(props.name, e);
  }

  return (
    <div onClick={handleNavItemClick} className={navClass}>
      { props.name }
    </div>);

}

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { clickHandler, sections } = this.props;
    return (
      <nav className={styles["nav-container"]}>
        <img className={styles["nav-container__image"]} src={logo} alt="Logo" />
        {
          sections.map((item, index) =>
            <NavigationItem isFirst={!index} key={index} name={item} clickHandler={clickHandler} />)
        }
      </nav>
    );
  }

}

export default Navigation;
