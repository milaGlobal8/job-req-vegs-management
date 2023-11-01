import {
  CollectionReference,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { firebaseApp } from "../firebase/firebaseConfig";
import { Vegs } from "../types/Vegs.types";

export const useFetchVegs = () => {
  // 野菜データを取得する
  const fetchVegs = (setVegs: React.Dispatch<React.SetStateAction<Vegs[]>>) => {
    // DBと接続
    const firestore = firebaseApp.firestore;
    // コレクションを取得（アサーション）
    const vegsRef = collection(firestore, "Vegs") as CollectionReference<Vegs>;
    // クエリ作成
    const q = query(vegsRef, orderBy("updatedAt", "desc"));

    // リアルタイム取得
    onSnapshot(q, (QuerySnapshot) => {
      let docs = QuerySnapshot.docs.map((doc) => doc.data());
      docs.map((doc) => ({
        alt: doc.alt,
        desc: doc.desc,
        image: doc.image,
        name: doc.name,
        stock: doc.stock,
        updatedAt: doc.updatedAt,
      }));
      setVegs(docs);
    });
  };

  return { fetchVegs };
};
