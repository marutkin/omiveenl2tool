
import React from "react";
import Navigation from "./components/Navigation.jsx";
import Page from "./components/Page.jsx";
import Person from "./components/Entities/Person.jsx";
import { getText } from "./lib/helper";
import styles from "../sass/styles.scss";

import testdata from "../settings/testdata.json";

const sectionNames = getText("titles");

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: sectionNames[0],
      prevPage: null,
      isLoading: true
    };
    this.navigationClick = this.navigationClick.bind(this);
  }

  handleNavActivation(elem, type) {
    const activeStyling = styles["nav-container__item--active"];
    if (type === "set") {
      elem.classList.add(activeStyling);
    } else {
      elem.classList.remove(activeStyling);
    }
  }

  navigationClick(data, e) {

    const tab = e.currentTarget;

    if (tab) {

      if (this.state.prevPage) {
        this.handleNavActivation(this.state.prevPage, "unset");
      } else {
        const prevPage = document.querySelector(`.${styles["nav-container__item--active"]}`);
        this.handleNavActivation(prevPage, "unset");
      }

      this.handleNavActivation(tab, "set");

    }

    this.setState({ currentPage: data, prevPage: tab });
  }

  setLoading() {
    this.setState({ isLoading: false });
  }

  componentDidMount() {
    this.setLoading();
  }

  render() {
    return (
      <main className={styles["main-container"]}>
        <Navigation navigationClick={this.navigationClick} sections={sectionNames} />
        {
          !this.state.isLoading &&
          <Page data={this.state.currentPage}>
            {
              this.state.currentPage === sectionNames[0] &&
            <div className={styles.animated}>
              <Person data={testdata} />
            </div>
            }
            {
              this.state.currentPage === sectionNames[1] &&
            <div className={styles.animated} >
              { sectionNames[1] }
            </div>
            }
            {
              this.state.currentPage === sectionNames[2] &&
            <div className={styles.animated} >
              { sectionNames[2] }
            </div>
            }
            {
              this.state.currentPage === sectionNames[3] &&
            <div className={styles.animated} >
              { sectionNames[3] }
            </div>
            }
          </Page>
        }

      </main>
    );
  }
}

export default App;
