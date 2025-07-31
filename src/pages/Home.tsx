import React, { useEffect, useState } from 'react';
import ProductSection from '../components/ProductSection'; // path to the component

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <main className="mt-20 mx-auto">
      <ProductSection products={products} />
    </main>
  );
};

export default Home;
