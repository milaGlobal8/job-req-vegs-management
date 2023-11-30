import { Flexbox, Typography } from "components/atoms";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <Flexbox
      className={styles.container}
      flexDirection="column"
      alignItems="center"
    >
      <Typography
        className={`${styles.neoText} ${styles.pulsate} ${styles.status}`}
      >
        404
      </Typography>
      <Typography
        className={`${styles.neoText} ${styles.pulsate} ${styles.message}`}
      >
        Page Not Found
      </Typography>
    </Flexbox>
  );
};

export default NotFound;
