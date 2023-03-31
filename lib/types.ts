export enum Model {
    FOAM_RUNNER = "FOAM_RUNNER",
    ADILETTE_22 = "ADILETTE_22",
    SLIDE = "SLIDE",
  }
  
export interface CatalogItem {
    id: number;
    article: string;
    releaseDate: string;
    composition: string;
    color: string;
    title: string;
    img: string;
    pageImg: string;
    price: number;
    discount: number | null;
    inStock: boolean;
    model: Model;
    sizes: number[];
}
  