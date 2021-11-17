import styles from './App.module.scss';
import { NavLink } from './components/NavLink';

export function App() {
  return (
    <div className={styles.appWrapper}>
      <NavLink linkName="Home" />
    </div>
  );
}
