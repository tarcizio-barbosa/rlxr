import { IoChevronDown } from 'react-icons/io5';

import { NavLink } from './components/NavLink';

import styles from './App.module.scss';
import { SecondaryButton } from './components/SecondaryButton';

export function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.navWrapper}>
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
          <SecondaryButton secondaryButtonText="Register" />
        </div>
      </div>

      <main className={styles.heroWrapper}>
        <h1>
          Sign In to
          <br />
          Deep and Greate Relax
        </h1>
        <p>
          If you don't have an account
          <br />
          You can <span>Register here!</span>
        </p>
      </main>
      <div className={styles.ilustrations}>
        <img src="/chair.png" alt="Chair" className={styles.chair} />
        <img
          src="/meditation.png"
          alt="Meditation"
          className={styles.meditation}
        />
      </div>
    </div>
  );
}
