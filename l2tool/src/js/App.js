
import React from 'react';
import Navigation from './components/Navigation';
import styles from './../sass/styles.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionNames: ["Online","BlackList","Gear","Events"]
    };
  }

  render() {
    return (
      <main className={styles["main-container"]}>
        <Navigation sections={this.state.sectionNames} />
      </main>
    );
  }
}

export default App;
