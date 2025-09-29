export type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export type CreateProductType = Omit<productType, 'id'>;
export type UpdateProductType = Partial<CreateProductType>;
