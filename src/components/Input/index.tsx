import styles from './styles.module.scss';

type InputProps = {
  nameAndId: string;
  placeholderName: string;
  isPasswordInput?: boolean;
};

export function Input({
  nameAndId,
  placeholderName,
  isPasswordInput = false,
}: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={isPasswordInput ? "password" : "text"}
        name={nameAndId}
        id={nameAndId}
        placeholder={placeholderName}
      />
    </div>
  );
}
