import { COLOR } from "../../../constants/color";
import { Flexbox, Image, Typography } from "../../common";
import styles from "./Card.module.scss";
import { CardProps } from "./Card.types";

const Card = (props: CardProps) => {
  const { alt, src, name, stock, desc } = props;

  return (
    <Flexbox
      className={styles.card}
      flexDirection="column"
      maxHeight={320}
      maxWidth={345}
      borderRadius={14}
      bgColor={COLOR.W1}
    >
      {/* 画像 */}
      <Image className={styles.img_area} src={src} alt={alt} />
      {/* 中身 */}
      <Flexbox
        flexDirection="column"
        maxHeight={180}
        maxWidth={345}
        padding={16}
      >
        <Flexbox justifyContent="space-between">
          {/* 商品名 */}
          <Typography weight="bold" size={20}>
            {name}
          </Typography>
          {/* 在庫数 */}
          <Typography color={COLOR.PINK1} weight="bold" size={17}>
            {stock}g
          </Typography>
        </Flexbox>
        {/* 説明 */}
        {desc && <Typography color={COLOR.B2}>{desc}</Typography>}{" "}
      </Flexbox>
    </Flexbox>
  );
};

export default Card;
