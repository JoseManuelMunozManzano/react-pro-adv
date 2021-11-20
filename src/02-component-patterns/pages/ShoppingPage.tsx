import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {/* Utilizando las propiedades de ProductCard. Ver fuente index.ts */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Café'} />
          <ProductCard.Buttons />
        </ProductCard>

        {/* Utilizando directamente los componentes */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
