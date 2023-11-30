import { Color } from "types/Color.types";

export type TagProps = {
  className?: string;
  tagName: string;
  bgColor?: Color | null;
  color?: Color | null;
  margin?: number | "auto" | "100%";
  marginTop?: number | "auto" | "100%";
  flexGrow?: number;
  flexShrink?: number;
  border?: string;
};
