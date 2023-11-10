import classNames from "classnames";
import { COLOR } from "../../../constants/color";
import styles from "./Typography.module.scss";
import { TypographyProps } from "./Typography.types";

const Typography = (props: TypographyProps) => {
  const {
    children,
    className,
    family = "Hiragino Sans",
    fontSize,
    color = COLOR.B1,
    textAlign = "start",
    fontWeight = "normal",
    textShadow,
    textDecoration,
  } = props;
  return (
    <span
      className={classNames(styles.typography, className)}
      style={{
        color: color ? `var(--${color})` : undefined,
        textAlign: textAlign,
        fontFamily: family,
        fontSize: fontSize,
        fontWeight: fontWeight,
        textShadow: textShadow,
        textDecoration: textDecoration,
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
