export class CategoryMaster {
  constructor(public CatId: number, public CatName: string){}
}

export const Categories=[
  {CatId: 101, CatName: 'C1'},
  {CatId: 102, CatName: 'C2'},
  {CatId: 103, CatName: 'C3'}
];

export class ProductChild {
  constructor(
    public PrdId: number,
    public PrdName: string,
    public CatId: number
  ){}
}
export const Products: Array<ProductChild> = [
  {PrdId: 1001, PrdName: 'P1', CatId: 101},
  {PrdId: 1002, PrdName: 'P2', CatId: 102},
  {PrdId: 1003, PrdName: 'P3', CatId: 103},
  {PrdId: 1004, PrdName: 'P4', CatId: 101},
  {PrdId: 1005, PrdName: 'P5', CatId: 102},
  {PrdId: 1006, PrdName: 'P6', CatId: 103}
];
