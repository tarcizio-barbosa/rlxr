import { IoChevronDown } from 'react-icons/io5';

import { NavLink } from './components/NavLink';

import styles from './App.module.scss';

export function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.navOneContainer}>
        <NavLink linkName="Home" />
        <NavLink linkName="Contact Us" />
        <NavLink linkName="Help" />
      </div>
      <div className={styles.navTwoContainer}>
        <div className={styles.iconWapper}>
          <NavLink linkName="English" />
          <IoChevronDown size={18} color="#D95A5F" />
        </div>
        <NavLink isActive={true} linkName="Login" />
        <NavLink linkName="Register" />
      </div>
    </div>
  );
}
