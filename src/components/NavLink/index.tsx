import styles from './styles.module.scss';

type NavLinkProps = {
  linkName: string;
};

export function NavLink({ linkName }: NavLinkProps) {
  return (
    <a className={styles.linkWrapper} href="/#">
      {linkName}
    </a>
  );
}
