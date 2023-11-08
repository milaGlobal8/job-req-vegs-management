import { Box, Typography } from "../../components/common";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <Box className={styles.container}>
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
    </Box>
  );
};

export default NotFound;
