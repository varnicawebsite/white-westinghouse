export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  capacity: string;
  energyRating: string;
  features: string[];
  specifications: {
    coolingCapacity: string;
    powerConsumption: string;
    refrigerant: string;
    noiseLevel: string;
    warranty: string;
  };
  imageUrl: string;
  images: string[];
  isFeatured: boolean;
}

export interface Enquiry {
  productId?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
