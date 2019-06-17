
import React from "react";
import styles from "../../sass/styles.scss";

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <section className={styles["page-container"]}>
        {
          children && children.map
          && children.map((item, index) => {
            return <div key={index} >{ item }</div>;
          })
          || children
        }
      </section>
    );
  }
}

export default PageContainer;
