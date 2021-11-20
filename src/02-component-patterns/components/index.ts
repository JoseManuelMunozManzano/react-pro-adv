import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTittle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTittle';

// Para poder asignar nuevas propiedades
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
