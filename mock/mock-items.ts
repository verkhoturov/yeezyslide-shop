import { twoImg, sevenImg, twelveImg } from "../components/welcome/images/index";

enum Model {
  FOAM_RUNNER = "FOAM_RUNNER",
  ADILETTE_22 = "ADILETTE_22",
  SLIDE = "SLIDE",
}

interface Item {
  id: number;
  title: string;
  img: string;
  price: number;
  discount: number | null;
  inStock: boolean;
  model: Model;
}

export const mockItems: Item[] = [
  {
    id: 1,
    title: "ADIDAS YEEZY adilette-22",
    img: twoImg.src,
    price: 18800,
    discount: 35,
    inStock: true,
    model: Model.ADILETTE_22,
  },
  {
    id: 2,
    title: "foam runner desert sand 333",
    img: sevenImg.src,
    price: 16000,
    discount: 25,
    inStock: true,
    model: Model.FOAM_RUNNER,
  },
  {
    id: 3,
    title: "Slide 123",
    img: twelveImg.src,
    price: 22000,
    discount: null,
    inStock: false,
    model: Model.SLIDE,
  },
  {
    id: 4,
    title: "ADIDAS YEEZY adilette-22",
    img: twelveImg.src,
    price: 18800,
    discount: 35,
    inStock: true,
    model: Model.ADILETTE_22,
  },
  {
    id: 5,
    title: "foam runner desert sand 444",
    img: twoImg.src,
    price: 16000,
    discount: 25,
    inStock: true,
    model: Model.FOAM_RUNNER,
  },
  {
    id: 6,
    title: "Slide 321",
    img: sevenImg.src,
    price: 22000,
    discount: null,
    inStock: true,
    model: Model.SLIDE,
  },
  {
    id: 7,
    title: "Slide 777",
    img: sevenImg.src,
    price: 7000,
    discount: 10,
    inStock: true,
    model: Model.SLIDE,
  },
  {
    id: 8,
    title: "foam runner desert sand 13",
    img: twoImg.src,
    price: 13000,
    discount: null,
    inStock: false,
    model: Model.FOAM_RUNNER,
  },
];
