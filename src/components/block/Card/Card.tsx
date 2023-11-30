// ゴールドアイコン
import GoldBagIcon from "assets/icon/gold/bag.svg";
import GoldBoxIcon from "assets/icon/gold/box.svg";
import GoldGramIcon from "assets/icon/gold/gram.svg";
// シルバーアイコン
import SilverBagIcon from "assets/icon/silver/bag.svg";
import SilverBoxIcon from "assets/icon/silver/box.svg";
import SilverGramIcon from "assets/icon/silver/gram.svg";
import { COLOR } from "constants/color";
import { Flexbox, Image, Typography } from "../../atoms";
import { Section } from "../Section";
import { Tag } from "../Tag";
import styles from "./Card.module.scss";
import { CardProps } from "./Card.types";

const Card = (props: CardProps) => {
  const {
    alt,
    image,
    name,
    desc,
    aBagQty,
    aBagStock,
    aBagPrice,
    aBoxQty,
    aBoxStock,
    aBoxPrice,
    aGramStock,
    aGramPrice,
    bBagQty,
    bBagStock,
    bBagPrice,
    bBoxQty,
    bBoxStock,
    bBoxPrice,
    bGramStock,
    bGramPrice,
  } = props;

  return (
    <Flexbox
      className={styles.card}
      flexDirection="column"
      width={345}
      borderRadius={14}
      bgColor={COLOR.W1}
    >
      {/* 画像 */}
      <Image className={styles.img_area} src={image} alt={alt} />
      {/* 中身 */}
      <Flexbox
        flexDirection="column"
        // maxHeight={180}
        maxWidth={345}
        padding={16}
        gap={15}
      >
        {/* 商品名と簡単な説明 */}
        <Flexbox className="name_desc" flexDirection="column" gap={5}>
          {/* 商品名 */}
          <Typography fontWeight="bold" fontSize={20}>
            {name}
          </Typography>
          {/* 説明 */}
          {desc && <Typography color={COLOR.B2}>{desc}</Typography>}
        </Flexbox>
        {/* A品 */}
        {/* タグ */}
        <Tag tagName="A品" bgColor={COLOR.GOLD1} color={COLOR.W1} />
        {/* 袋 */}
        <Section
          className="a_bag"
          sectionTitle="袋"
          price={aBagPrice}
          shape="袋"
          stock={aBagStock}
          qty={aBagQty}
          image={GoldBagIcon}
        />
        {/* 箱 */}
        <Section
          className="a_box"
          sectionTitle="箱"
          price={aBoxPrice}
          shape="箱"
          stock={aBoxStock}
          qty={aBoxQty}
          image={GoldBoxIcon}
        />
        {/* g */}
        <Section
          className="a_gram"
          isGram
          sectionTitle="量り売り"
          price={aGramPrice}
          shape="g"
          stock={aGramStock}
          image={GoldGramIcon}
        />
        {/* B品 */}
        {/* タグ */}
        <Tag
          tagName="B品"
          bgColor={COLOR.SILVER1}
          color={COLOR.W1}
          marginTop={16}
        />
        {/* 袋 */}
        <Section
          className="b_bag"
          sectionTitle="袋"
          price={bBagPrice}
          shape="袋"
          stock={bBagStock}
          qty={bBagQty}
          image={SilverBagIcon}
        />
        {/* 箱 */}
        <Section
          className="b_box"
          sectionTitle="箱"
          price={bBoxPrice}
          shape="箱"
          stock={bBoxStock}
          qty={bBoxQty}
          image={SilverBoxIcon}
        />
        {/* g */}
        <Section
          className="b_gram"
          isGram
          sectionTitle="量り売り"
          price={bGramPrice}
          shape="g"
          stock={bGramStock}
          image={SilverGramIcon}
        />
      </Flexbox>
    </Flexbox>
  );
};

export default Card;
