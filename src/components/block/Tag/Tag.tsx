import classNames from "classnames";
import { Flexbox, Typography } from "../../atoms";
import styles from "./Tag.module.scss";
import { TagProps } from "./Tag.types";

const Tag = (props: TagProps) => {
  const {
    className,
    tagName,
    bgColor,
    color,
    border,
    margin,
    marginTop,
    flexGrow,
    flexShrink,
  } = props;

  return (
    <Flexbox
      className={classNames(styles.tag, className)}
      bgColor={bgColor}
      border={border}
      margin={margin}
      marginTop={marginTop}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
    >
      <Typography color={color} fontWeight="bold" textShadow="1px 1px 1px #000">
        {tagName}
      </Typography>
    </Flexbox>
  );
};

export default Tag;
