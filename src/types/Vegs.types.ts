import { Timestamp } from "firebase/firestore";

export type Vegs = {
  alt: string;
  desc: string;
  image: string;
  name: string;
  stock: number;
  updatedAt: Timestamp;
};
