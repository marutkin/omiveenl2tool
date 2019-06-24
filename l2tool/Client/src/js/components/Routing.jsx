
import React from "react";
import { Route, Switch, NavLink, BrowserRouter as Router } from "react-router-dom";
import PageContainer from "./PageContainer.jsx";

import OnlinePage from "./PageTypes/OnlinePage.jsx";
import GearPage from "./PageTypes/GearPage.jsx";
import BlackListPage from "./PageTypes/BlackListPage.jsx";
import EventsPage from "./PageTypes/EventsPage.jsx";

import logo from "../../images/logo.png";
import styles from "../../sass/styles.scss";

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const [ itemStyle, itemStyleActive ] = [ styles["nav-container__item"], styles["nav-container__item--active"] ];

    return (
      <Router>
        <nav className={styles["nav-container"]}>
          <img className={styles["nav-container__image"]} src={logo} alt="Logo" />
          <NavLink className={itemStyle} activeClassName={`${itemStyle} ${itemStyleActive}`} exact to="/">Online</NavLink>
          <NavLink className={itemStyle} activeClassName={`${itemStyle} ${itemStyleActive}`} to="/BlackListPage">BlackList</NavLink>
          <NavLink className={itemStyle} activeClassName={`${itemStyle} ${itemStyleActive}`} to="/GearPage">Gear</NavLink>
          <NavLink className={itemStyle} activeClassName={`${itemStyle} ${itemStyleActive}`} to="/EventsPage">Events</NavLink>
        </nav>
        <PageContainer>
          <Switch>
            <Route exact path="/" component={OnlinePage} />
            <Route path="/BlackListPage" component={BlackListPage} />
            <Route path="/GearPage" component={GearPage} />
            <Route path="/EventsPage" component={EventsPage} />
          </Switch>
        </PageContainer>
      </Router>
    );
  }

}

export default Navigation;
