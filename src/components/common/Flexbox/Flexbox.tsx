import classNames from "classnames";
import styles from "./Flexbox.module.scss";
import { FlexboxProps } from "./Flexbox.types";

const Flexbox = (props: FlexboxProps) => {
  const {
    children,
    className,
    justifyContent,
    alignItems,
    flexDirection,
    gap,
  } = props;
  return (
    <div
      className={classNames(styles.flex, className)}
      style={{
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: flexDirection,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
};

export default Flexbox;
