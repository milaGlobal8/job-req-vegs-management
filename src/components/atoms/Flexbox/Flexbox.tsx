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
    flexGrow,
    flexShrink,
    maxHeight,
    maxWidth,
    minHeight,
    height,
    width,
    padding,
    margin,
    marginTop,
    border,
    borderTop,
    borderBottom,
    borderRadius,
    bgColor,
    color,
    textAlign,
    textDecoration,
    opacity,
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
        flexGrow: flexGrow,
        flexShrink: flexShrink,
        background: bgColor ? `var(--${bgColor})` : undefined,
        color: color ? `var(--${color})` : undefined,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        minHeight: minHeight,
        height: height,
        width: width,
        padding: padding,
        margin: margin,
        marginTop: marginTop,
        border: border,
        borderTop: borderTop,
        borderBottom: borderBottom,
        borderRadius: borderRadius,
        textAlign: textAlign,
        textDecoration: textDecoration,
        opacity: opacity,
      }}
    >
      {children}
    </div>
  );
};

export default Flexbox;
