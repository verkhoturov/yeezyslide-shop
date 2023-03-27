enum Model {
    FOAM_RUNNER = "FOAM_RUNNER",
    ADILETTE_22 = "ADILETTE_22",
    SLIDE = "SLIDE",
  }
  
export interface CatalogItem {
    id: number;
    title: string;
    img: string;
    price: number;
    discount: number | null;
    inStock: boolean;
    model: Model;
}
  