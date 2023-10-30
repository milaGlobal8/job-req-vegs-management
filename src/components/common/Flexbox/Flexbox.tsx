import classNames from "classnames";
import styles from "./Flexbox.module.scss";
import { FlexboxProps } from "./Flexbox.types";

const Flexbox = (props: FlexboxProps) => {
  const { children, className } = props;
  return <div className={classNames(styles.flex, className)}>{children}</div>;
};

export default Flexbox;
