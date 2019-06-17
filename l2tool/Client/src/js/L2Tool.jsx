
import React from "react";

import Navigation from "./components/Navigation.jsx";
import PageContainer from "./components/PageContainer.jsx";

import OnlinePage from "./components/PageTypes/OnlinePage.jsx";
import GearPage from "./components/PageTypes/GearPage.jsx";
import BlackListPage from "./components/PageTypes/BlackListPage.jsx";
import EventsPage from "./components/PageTypes/EventsPage.jsx";

import { getText } from "./lib/helper";
import styles from "../sass/styles.scss";

const SECTION_NAMES = getText("titles");
const NAV_ITEM_ACITVE_CLASS = styles["nav-container__item--active"];

class L2Tool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: SECTION_NAMES[0],
      prevPage: null
    };
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
  }

  toggleNavigationState(elem, type) {
    return type === "set" ? elem.classList.add(NAV_ITEM_ACITVE_CLASS) : elem.classList.remove(NAV_ITEM_ACITVE_CLASS);
  }

  handleNavigationClick(data, e) {

    const tab = e.currentTarget;
    const prevPage = document.querySelector(`.${NAV_ITEM_ACITVE_CLASS}`);

    this.toggleNavigationState(prevPage, "unset");
    this.toggleNavigationState(tab, "set");
    this.setState({ currentPage: data, prevPage: tab });
  }

  getPageContent() {
    // TODO [DM]: FIX navigation logic.
    switch (this.state.currentPage) {
      case SECTION_NAMES[0]:
        return <OnlinePage />;
      case SECTION_NAMES[1]:
        return <BlackListPage />;
      case SECTION_NAMES[2]:
        return <GearPage />;
      case SECTION_NAMES[3]:
        return <EventsPage />;
    }
  }

  componentWillMount() {
    const prevPage = document.querySelector(`.${NAV_ITEM_ACITVE_CLASS}`);
    this.setState({ prevPage });
  }

  render() {
    return (
      <main className={styles["main-container"]}>

        <Navigation clickHandler={this.handleNavigationClick} sections={SECTION_NAMES} />

        <PageContainer>
          { this.getPageContent() }
        </PageContainer>

      </main>
    );
  }
}

export default L2Tool;
