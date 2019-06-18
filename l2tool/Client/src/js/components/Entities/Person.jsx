
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../../../sass/styles.scss";

import onlineLogo from "./../../../images/EntitiesAssets/online.png";
import offlineLogo from "./../../../images/EntitiesAssets/offline.png";
import afkLogo from "./../../../images/EntitiesAssets/afk.png";

class Person extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);

  }

  getPerson(data) {
    const statusLogo = data.status === "online" ? onlineLogo
      : data.status === "afk" ? afkLogo : offlineLogo;
    return (
      <div className={styles.person__row}>

        <div className={styles.person__head}>
          <div className={styles["person__head-item"]}>
            { this.state.isOpen ? "\u25B2" : "\u25BC" }
          </div>
          <div className={styles["person__head-item"]}>
            <img className={styles["person__head-image"]} src={statusLogo} alt="Status Logo" />
          </div>
          <div className={styles["person__head-item"]}>
            <p className={styles["person__head-item-lvl"]}>{ data.lvl }</p>
            <strong> { data.nickname }</strong>
          </div>
          <div className={styles["person__head-item"]}>{ data.name }</div>
        </div>

        <div className={styles.person__body}>
          <div className={styles["person__body-item"]}>
            AvailableUntil: { data.availableUntil }
          </div>
          <div className={styles["person__body-item"]}>
            Impact: { data.impactPoints }
          </div>
          <div className={styles["person__body-item"]}>
            Realized: { data.realizedPoints }
          </div>
          <div className={styles["person__body-item"]}>
            Party name: { data.partyName }
          </div>
          <div className={styles["person__body-item"]}>
            Party leader name: { data.partyLeaderName }
          </div>
          <div className={styles["person__body-item"]}>
            Priority: { data.priority }
          </div>
        </div>

      </div>);
  }

  toggle() {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }

  render() {
    const { data } = this.props;
    const styleClass = !this.state.isOpen ? styles.person : `${styles.person} ${styles["person--expand"]}`;
    return (
      <div onClick={this.toggle} className={styleClass}>
        { this.getPerson(data) }
      </div>
    );
  }

}

export default Person;
