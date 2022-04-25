import { ReactNode } from "react";
import styles from "./index.module.scss";

interface IProps {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
}

const Button = ({ children, primary, secondary }: IProps): JSX.Element => {
  return (
    <button
      className={
        primary ? styles.primary : secondary ? styles.secondary : undefined
      }
    >
      {children}
    </button>
  );
};

export default Button;
