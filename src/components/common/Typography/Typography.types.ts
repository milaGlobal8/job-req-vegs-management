import { ReactNode } from "react";
import { Color } from "../../../types/Color.types";

export type TypographyProps = {
  children?: ReactNode;
  className?: string;
  family?: "Hiragino Sans" | "Hiragino Kaku Gothic Pro";
  fontSize?: number;
  color?: Color | null;
  textAlign?: "start" | "center" | "end" | "justify";
  fontWeight?: "normal" | "bold" | "lighter" | "bolder";
  textShadow?: string;
  textDecoration?: string;
  display?: string;
};
