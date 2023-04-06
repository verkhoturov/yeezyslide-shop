export enum Model {
  FOAM_RUNNER = "FOAM_RUNNER",
  ADILETTE_22 = "ADILETTE_22",
  SLIDE = "SLIDE",
}

export interface CatalogItem {
  id: number;
  slug: string;
  article: string;
  releaseDate: string;
  composition: string;
  color: string;
  title: string;
  previewImg: string;
  pageImg: string;
  gallery: string[];
  price: number;
  discount: number | null;
  inStock: boolean;
  preOrder: boolean;
  model: Model;
  sizes: string[];
}

interface ServerCatalogColor {
  colorName: string;
  images: {
    sizes: {
      large: string;
      medium_large: string;
    };
  }[];
}

export interface ServerCatalogItem {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  acf: {
    article: string;
    releaseDate: string;
    composition: string;
    colors: ServerCatalogColor;
    price: string;
    discount: string;
    inStock: boolean;
    preOrder: boolean;
    model: Model;
    sizes: string[];
  };
}
