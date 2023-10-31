import { Flexbox, Image, Typography } from "../../common";
import { CardProps } from "./Card.types";

const Card = (props: CardProps) => {
  const { children } = props;

  return (
    <Flexbox>
      {/* 画像 */}
      <Image />
      {/* 中身 */}
      <Flexbox>
        {/* 商品名 */}
        <Typography></Typography>
        {/* 在庫数 */}
        <Typography></Typography>
        {/* 説明 */}
        <Typography></Typography>
      </Flexbox>
    </Flexbox>
  );
};

export default Card;
