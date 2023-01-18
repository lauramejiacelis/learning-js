import styles from "./Tabs.module.css";
import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map(({ title }, index) => (
          <div
            key={index}
            data-testid="tab"
            className={styles.tab}
            onClick={() => setSelectedIndex(index)}
          >
            {title}
          </div>
        ))}
      </div>
      <div className={styles.content}>{tabs[selectedIndex].content}</div>
    </div>
  );
};

export default Tabs;
