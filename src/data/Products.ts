import {ImageSourcePropType} from 'react-native';

export interface Product {
  id: number;
  sku: string;
  title: string;
  quantity?: number;
  price: number;
  image: ImageSourcePropType;
}

export const Products: Product[] = [
  {
    id: 1,
    sku: 'MED1001',
    title: 'Emzo Paracetamol',
    price: 400,
    image: require('../assets/Emzo-pcm.jpg'),
  },
  {
    id: 2,
    sku: 'MED1002',
    title: 'Modena Covid vaccine',
    price: 2000,
    image: require('../assets/covid-vaccine.jpg'),
  },
  {
    id: 3,
    sku: 'MED1003',
    title: 'Vitamin D',
    price: 200,
    image: require('../assets/vitamin-D.jpg'),
  },
  {
    id: 4,
    sku: 'MED1004',
    title: 'Vitamin C',
    price: 150,
    image: require('../assets/covid-vaccine.jpg'),
  },
  {
    id: 5,
    sku: 'MED1005',
    title: 'Calcium Magnesium',
    price: 250,
    image: require('../assets/Calcium-magnesium.jpg'),
  },
  {
    id: 6,
    sku: 'MED1006',
    title: 'Vitamin B12',
    price: 300,
    image: require('../assets/Vitamin-B-12.jpg'),
  },
];
