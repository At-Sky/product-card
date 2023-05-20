import {StaticImageData} from "next/image";

export interface Product {
    id: number;
    img: StaticImageData[];
    description: string;
    colors: string[];
    title: string;
    price: number;
}
