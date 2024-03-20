import { Category } from "./Category";

export interface Article {
    id:string;
    nomarticle:string;
    description:string;
    prix:string;
    imageart :string;
    categorieID:string;
    categories:Category;
}