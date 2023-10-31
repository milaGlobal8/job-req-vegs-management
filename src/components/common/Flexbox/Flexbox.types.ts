import { ReactNode } from "react";

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
};
