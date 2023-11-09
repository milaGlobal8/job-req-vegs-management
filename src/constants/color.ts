export const COLOR = {
  B1: "b1",
  B2: "b2",
  W1: "w1",
  W2: "w2",
  RED1: "red1",
  BLUE1: "blue1",
  BLUE2: "blue2",
  GREEN1: "green1",
  GREEN2: "green2",
  ORANGE1: "orange1",
  ORANGE2: "orange2",
  PINK1: "pink1",
  PINK2: "pink2",
  GOLD1: "gold1",
  SILVER1: "silver1",
} as const;

// as const : const assertionという機能でObjや値をreadonly(再代入不可)にする機能
//「const assertion」はreadonlyにしたい変数の末尾に「as const」をつけることで実現できる
