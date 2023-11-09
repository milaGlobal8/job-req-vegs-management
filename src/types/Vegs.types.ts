import { Timestamp } from "firebase/firestore";

export type Vegs = {
  alt?: string;
  category?: "A" | "B";
  createdAt?: Timestamp;
  desc?: string;
  image?: string;
  name?: string;
  price?: number;
  shape?: "袋" | "箱" | "g";
  stock?: number;
  updatedAt: Timestamp;
};
