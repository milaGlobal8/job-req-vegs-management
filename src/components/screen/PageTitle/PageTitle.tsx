import { Flexbox, Typography } from "../../common";
import styles from "./PageTitle.module.scss";
import { PageTitleProps } from "./PageTitle.types";

const PageTitle = (props: PageTitleProps) => {
  const { children } = props;

  return (
    <Flexbox
      className={styles.page_title}
      justifyContent="center"
      alignItems="center"
    >
      <Typography>{children}</Typography>
    </Flexbox>
  );
};

export default PageTitle;
