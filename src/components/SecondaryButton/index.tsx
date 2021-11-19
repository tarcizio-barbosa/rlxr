import styles from './styles.module.scss';

type SecondaryButtonProps = {
  secondaryButtonText: string;
};

export function SecondaryButton({ secondaryButtonText }: SecondaryButtonProps) {
  return (
    <button className={styles.secondaryButton}>{secondaryButtonText}</button>
  );
}
