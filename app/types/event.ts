import { Category } from "./category";

export interface Event {
    id: string;
    name: string;
    descrpition: string;
    price: number;
    date: string;
    category: Category;
}