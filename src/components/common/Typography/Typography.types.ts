import { ReactNode } from "react";
import { Color } from "../../../types/Color.types";

export type TypographyProps = {
  children?: ReactNode;
  className?: string;
  family?: "Hiragino Sans" | "Hiragino Kaku Gothic Pro";
  size?: "fs10" | "fs12" | "fs14" | "fs16";
  color?: Color | null;
  align?: "start" | "center" | "end" | "justify";
  weight?: "normal" | "bold" | "lighter" | "bolder";
};
