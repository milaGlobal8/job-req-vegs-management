import classNames from "classnames";
import { COLOR } from "../../../constants/color";
import styles from "./Typography.module.scss";
import { TypographyProps } from "./Typography.types";

const Typography = (props: TypographyProps) => {
  const {
    children,
    className,
    family = "Hiragino Sans",
    size,
    color = COLOR.B1,
    align = "start",
    weight = "normal",
  } = props;
  return (
    <span
      className={classNames(styles.typography, className)}
      style={{
        color: color ? `var(--${color})` : undefined,
        textAlign: align,
        fontFamily: family,
        fontSize: size,
        fontWeight: weight,
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
