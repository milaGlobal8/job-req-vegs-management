import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Flexbox } from "../../components/common";
import { Card, Loading, UpdatedAt } from "../../components/screen";
import { useFetchVegs } from "../../hooks/useFetchVegs";
import { Vegs } from "../../types/Vegs.types";
import styles from "./Home.module.scss";

export default function Home() {
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
        {vegs.length !== 0
          ? dayjs(vegs[0].updatedAt.toDate()).format("YYYY/MM/DD HH:mm")
          : "更新中..."}
      </UpdatedAt>
      <Flexbox justifyContent="center" flexWrap="wrap" gap={30} margin={45}>
        {vegs.length !== 0 ? (
          vegs.map((veg) => (
            <Card
              key={crypto.randomUUID()}
              alt={veg.alt}
              src={veg.image}
              name={veg.name}
              stock={veg.stock}
              desc={veg.desc}
            />
          ))
        ) : (
          <Loading loadingMsg="データ取得中..." />
        )}
      </Flexbox>
    </Flexbox>
  );
}
