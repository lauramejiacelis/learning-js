import { PureComponent } from 'react';
import styles from './PageNotFound.module.css';

class PageNotFound extends PureComponent {
  render() {
    return (
      <div className={styles.error}>
        <h1>Page Not Found</h1>
      </div>
    );
  }
}

export default PageNotFound;
