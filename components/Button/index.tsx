import { ReactNode } from "react";
import styles from "./index.module.scss";

interface IProps {
  children: ReactNode;
  onClickAction?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

const Button = ({
  children,
  onClickAction,
  primary,
  secondary,
  tertiary,
}: IProps): JSX.Element => {
  return (
    <button
      className={
        primary
          ? styles.primary
          : secondary
          ? styles.secondary
          : tertiary
          ? styles.tertiary
          : undefined
      }
      onClick={onClickAction}
    >
      {children}
    </button>
  );
};

export default Button;
