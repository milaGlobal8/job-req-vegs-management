import Logo from "../../../assets/sample-logo.jpg";
import { Flexbox, Image } from "../../common";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Flexbox className={styles.header}>
      <Image alt="ヘッダーロゴ" className={styles.img_container} src={Logo} />
    </Flexbox>
  );
};

export default Header;
