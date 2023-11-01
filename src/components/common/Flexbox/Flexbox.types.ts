import { ReactNode } from "react";
import { Color } from "../../../types/Color.types";

export type FlexboxProps = {
  children?: ReactNode;
  className?: string;
  justifyContent?:
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "end";
  alignItems?: "start" | "center" | "end";
  flexDirection?: "column";
  gap?: number;
  flexWrap?: "wrap";
  maxHeight?: number;
  maxWidth?: number;
  padding?: number;
  margin?: number;
  borderRadius?: number;
  bgColor?: Color | null;
};
