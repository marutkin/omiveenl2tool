
import React from "react";
import Navigation from "./components/Navigation.jsx";
import Page from "./components/Page.jsx";
import OnlinePage from "./components/PageTypes/OnlinePage.jsx";
import GearPage from "./components/PageTypes/GearPage.jsx";
import BlackListPage from "./components/PageTypes/BlackListPage.jsx";
import EventsPage from "./components/PageTypes/EventsPage.jsx";
import Person from "./components/Entities/Person.jsx";
import { getText } from "./lib/helper";
import styles from "../sass/styles.scss";

import testdata from "../settings/testdata.json";

const sectionNames = getText("titles");

class L2Tool extends React.Component {

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

  getPageContent() {
    switch (this.state.currentPage) {
      case sectionNames[0]:
        return <OnlinePage> <Person data={testdata} /> </OnlinePage>;
      case sectionNames[1]:
        return <BlackListPage> <div>BlackList</div> </BlackListPage>;
      case sectionNames[2]:
        return <GearPage> <div>GearPage</div> </GearPage>;
      case sectionNames[3]:
        return <EventsPage> <div>EventsPage</div> </EventsPage>;
    }
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
            { this.getPageContent() }
          </Page>
        }
      </main>
    );
  }
}

export default L2Tool;
