import { COLOR } from "constants/color";
import { Flexbox, Image, Typography } from "../../atoms";
import { Tag } from "../Tag";
import styles from "./Section.module.scss";
import { SectionProps } from "./Section.types";

const Section = (props: SectionProps) => {
  const {
    className,
    isGram = false,
    sectionTitle,
    price,
    shape,
    stock,
    qty,
    image,
  } = props;

  return (
    <Flexbox
      className={className}
      flexDirection="column"
      justifyContent="space-between"
      gap={15}
      borderBottom="1px solid #e3e3e3"
      minHeight={isGram ? 80 : 105}
    >
      {/* セクションタイトル */}
      <Flexbox
        className="title"
        justifyContent="space-between"
        alignItems="start"
      >
        <Flexbox gap={3}>
          <Image
            className={styles.img_box}
            src={image}
            alt="タイトルアイコン"
          />
          <Typography fontWeight="bold" fontSize={18} display="block">
            {sectionTitle}
          </Typography>
        </Flexbox>
        {/* stockが「0」のとき、つまり完売したときに「完売タグ」を表示する */}
        {stock === 0 && (
          <Tag
            tagName="完売"
            bgColor={COLOR.RED2}
            color={COLOR.W1}
            border="1px solid #e00410"
          />
        )}
      </Flexbox>
      {/* セクション中身 */}
      <Flexbox
        className="section_content"
        flexDirection="column"
        gap={30}
        opacity={stock === 0 ? 0.4 : 1}
      >
        {/* 商品説明 */}
        <Typography fontWeight="bold" fontSize={15}>
          内容量：{isGram ? "お客様次第" : `${qty}g`}
        </Typography>
        {/* 値段と在庫数 */}
        <Flexbox justifyContent="space-between">
          <Typography className="price" fontWeight="bold">
            お値段：{price}円/{isGram ? `100${shape}` : `1${shape}`}
          </Typography>
        </Flexbox>
        <Typography
          className="stock"
          fontWeight="bold"
          textAlign="end"
          color={COLOR.PINK1}
        >
          {`残り${stock}${shape}`}
        </Typography>
      </Flexbox>
    </Flexbox>
  );
};

export default Section;
