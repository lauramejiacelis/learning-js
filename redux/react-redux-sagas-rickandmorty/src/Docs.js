import { PureComponent } from 'react';
import styles from './Docs.module.css';

class Docs extends PureComponent {
  render() {
    return (
      <div className={styles.docInfo}>
        <h1>Documentation</h1>
        <h2>Introduction</h2>
        <p>
          This documentation will help you get familiar with the resources of
          the Rick and Morty API and show you how to make different queries, so
          that you can get the most out of it.
        </p>
      </div>
    );
  }
}

export default Docs;
