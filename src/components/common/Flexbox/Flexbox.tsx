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
    flexWrap,
    maxHeight,
    maxWidth,
    padding,
    margin,
    borderRadius,
    bgColor,
  } = props;
  return (
    <div
      className={classNames(styles.flex, className)}
      style={{
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: flexDirection,
        gap: gap,
        flexWrap: flexWrap,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        padding: padding,
        margin: margin,
        borderRadius: borderRadius,
        backgroundColor: bgColor ? `var(--${bgColor})` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default Flexbox;
