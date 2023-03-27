import { StaticImageData } from "next/image";
import { twoImg, sevenImg, twelveImg } from "../welcome/images/index";

interface Item {
  id: number;
  title: string;
  img: StaticImageData;
  price: number;
  discount: number | null;
  inStock: boolean;
}

export const mockItems: Item[] = [
  {
    id: 1,
    title: "ADIDAS YEEZY adilette-22",
    img: twoImg,
    price: 18800,
    discount: 35,
    inStock: true,
  },
  {
    id: 2,
    title: "ADIDAS YEEZY adilette-22",
    img: sevenImg,
    price: 16000,
    discount: 25,
    inStock: true,
  },
  {
    id: 3,
    title: "ADIDAS YEEZY adilette-22",
    img: twelveImg,
    price: 22000,
    discount: null,
    inStock: false,
  },
  {
    id: 4,
    title: "ADIDAS YEEZY adilette-22",
    img: twelveImg,
    price: 18800,
    discount: 35,
    inStock: true,
  },
  {
    id: 5,
    title: "ADIDAS YEEZY adilette-22",
    img: twoImg,
    price: 16000,
    discount: 25,
    inStock: true,
  },
  {
    id: 6,
    title: "ADIDAS YEEZY adilette-22",
    img: sevenImg,
    price: 22000,
    discount: null,
    inStock: true,
  },
];
