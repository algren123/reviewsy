import { ReactNode } from "react";
import styles from "./index.module.scss";

interface IProps {
  children: ReactNode;
  link: string;
  primary?: boolean;
  secondary?: boolean;
}

const AnchorLink = ({
  children,
  link,
  primary,
  secondary,
}: IProps): JSX.Element => {
  return (
    <a
      className={
        primary ? styles.primary : secondary ? styles.secondary : undefined
      }
      href={link}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
