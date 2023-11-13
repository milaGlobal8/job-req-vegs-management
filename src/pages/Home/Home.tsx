import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Flexbox, Typography } from "../../components/common";
import { Card, Loading, UpdatedAt, Version } from "../../components/screen";
import { useFetchVegs } from "../../hooks/useFetchVegs";
import { Vegs } from "../../types/Vegs.types";
import styles from "./Home.module.scss";

const Home = () => {
  // state
  const [vegs, setVegs] = useState<Vegs[]>([]);

  // hooks
  const { fetchVegs } = useFetchVegs();

  // useEffect
  useEffect(() => {
    fetchVegs(setVegs);
  }, []);

  return (
    <Flexbox className={styles.home_page} flexDirection="column" gap={20}>
      <UpdatedAt>
        {vegs.length === 0
          ? "更新中..."
          : dayjs(vegs[0].updatedAt.toDate()).format("YYYY/MM/DD HH:mm")}
      </UpdatedAt>
      <Flexbox justifyContent="center" flexWrap="wrap" gap={30} margin={45}>
        {vegs.length === 0 ? (
          <Loading loadingMsg="データ取得中..." />
        ) : (
          vegs.map((veg) => (
            <Card
              key={crypto.randomUUID()}
              alt={veg.alt}
              desc={veg.desc}
              image={veg.image}
              name={veg.name}
              // A品
              // 袋
              aBagQty={veg.aBagQty}
              aBagStock={veg.aBagStock}
              aBagPrice={veg.aBagPrice}
              // 箱
              aBoxQty={veg.aBoxQty}
              aBoxStock={veg.aBoxStock}
              aBoxPrice={veg.aBoxPrice}
              // g
              aGramStock={veg.aGramStock}
              aGramPrice={veg.aGramPrice}
              // B品
              // 袋
              bBagQty={veg.bBagQty}
              bBagStock={veg.bBagStock}
              bBagPrice={veg.bBagPrice}
              // 箱
              bBoxQty={veg.bBoxQty}
              bBoxStock={veg.bBoxStock}
              bBoxPrice={veg.bBoxPrice}
              // g
              bGramStock={veg.bGramStock}
              bGramPrice={veg.bGramPrice}
            />
          ))
        )}
      </Flexbox>
      {/* アプリバージョン情報 */}
      <Version>
        <Typography>Version {process.env.REACT_APP_VERSION}</Typography>
      </Version>
    </Flexbox>
  );
};

export default Home;
