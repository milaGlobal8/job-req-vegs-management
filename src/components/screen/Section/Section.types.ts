export type SectionProps = {
  className?: string;
  isGram?: boolean;
  sectionTitle?: string;
  price?: number;
  // shapeは「販売形態」を指す
  shape?: string;
  stock?: number;
  // qtyは「内容量」を指す
  qty?: number;
  image?: string;
};
