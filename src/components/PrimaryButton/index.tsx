import styles from './styles.module.scss';

type PrimaryButtonProps = {
  primaryButtonText: string;
};

export function PrimaryButton({ primaryButtonText }: PrimaryButtonProps) {
  return (
    <button className={styles.primaryButton}>{primaryButtonText}</button>
  );
}
