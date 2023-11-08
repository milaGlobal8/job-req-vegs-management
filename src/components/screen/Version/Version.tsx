import { Flexbox } from "../../common";
import styles from "./Version.module.scss";
import { VersionProps } from "./Version.types";

const Version = (props: VersionProps) => {
  const { children } = props;

  return (
    <Flexbox
      className={styles.version}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flexbox>
  );
};

export default Version;
