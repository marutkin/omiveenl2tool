
import React from 'react';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Person from './components/Entities/Person';
import { getText } from './lib/helper';
import styles from './../sass/styles.scss';

import testdata from './../settings/testdata.json';

const sectionNames = getText("titles");

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: sectionNames[0]
    };
    this.navigationClick = this.navigationClick.bind(this);
  }

  navigationClick(data) {
    this.setState({currentPage: data});
  }

  render() {
    return (
      <main className={styles["main-container"]}>
        <Navigation navigationClick={this.navigationClick} sections={sectionNames} />
        <Page data={this.state.currentPage}>
          {
            this.state.currentPage == sectionNames[0] &&
            <Person data={testdata}/>
          }
          {
            this.state.currentPage == sectionNames[1] &&
            <div>
              Default BLACK LIST
            </div>
          }
          {
            this.state.currentPage == sectionNames[2] &&
            <div>
              Default GEAR
            </div>
          }
          {
            this.state.currentPage == sectionNames[3] &&
            <div>
              Default EVENTS
            </div>
          }
        </Page>
      </main>
    );
  }
}

export default App;
