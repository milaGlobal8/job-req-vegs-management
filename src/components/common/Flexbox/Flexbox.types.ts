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
  flexGrow?: number;
  flexShrink?: number;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  height?: number;
  width?: number;
  padding?: number;
  margin?: number | "auto" | "100%";
  marginTop?: number | "auto" | "100%";
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRadius?: number;
  bgColor?: Color | null;
  color?: Color | null;
  textAlign?: "start" | "center" | "end" | "justify";
  textDecoration?: string;
  opacity?: number;
};
