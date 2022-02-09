import React from 'react';

import Logo from '../Logo';
import styles from './styles.module.scss';

interface ISidebar {
  className?: string;
}

function Sidebar(props: ISidebar) {
  return (
    <div className={`${styles.sidebarContainer} ${props.className ?? ''}`}>
      <div className={styles.logoIcon}>
        <Logo />
      </div>
    </div>
  );
}

export default Sidebar;
