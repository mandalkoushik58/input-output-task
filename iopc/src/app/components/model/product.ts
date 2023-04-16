


export interface Iproducts {
  productName:string;
  pdescription:string;
  pcategory:Iproductcategory;
}

export type Iproductcategory = "catlog"|"product";
