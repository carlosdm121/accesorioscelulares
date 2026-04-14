export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  logoUrl: string;
}
