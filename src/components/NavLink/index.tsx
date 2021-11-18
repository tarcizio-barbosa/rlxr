import styles from './styles.module.scss';

type NavLinkProps = {
  linkName: string;
  isActive?: boolean;
};

export function NavLink({ linkName, isActive = false }: NavLinkProps) {
  return (
    <a
      className={
        isActive
          ? `${styles.linkWrapper} ${styles.isActive}`
          : `${styles.linkWrapper}`
      }
      href="/#"
    >
      {linkName}
    </a>
  );
}
