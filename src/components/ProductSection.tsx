import React from 'react';
import ProductCard from '../components/ProductCard';
import { useTheme } from '../context/ThemeContext';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface Props {
  products: Product[];
}

const layoutMap: Record<string, string> = {
  theme1: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8', // Minimalist
  theme2: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center', // Sidebar/Dark mode
  theme3: 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4', // Colorful card-based
};

const ProductSection: React.FC<Props> = ({ products }) => {
  const { theme } = useTheme();

  return (
    <section>
      <h1 className={`text-2xl text-center mb-8  ${
        theme === 'theme2'
        ? 'bg-gray-800 text-white font-serif'
        : ''
    }`}>Our Products</h1>

      <div className={layoutMap[theme]}>
        {products.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
