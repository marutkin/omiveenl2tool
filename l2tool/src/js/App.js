
import React from 'react';
import Navigation from './components/Navigation';
import Page from './components/Page';
import styles from './../sass/styles.scss';

const sectionNames = ["Online","BlackList","Gear","Events"];

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
        <Page data={this.state.currentPage}/>
      </main>
    );
  }
}

export default App;
