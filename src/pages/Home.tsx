import React, { useEffect, useState } from 'react';
import ProductSection from '../components/ProductSection';
import { useTheme } from '../context/ThemeContext'; // import theme context

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme(); // use theme

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

 
  const loadingThemeClass =
    theme === 'theme2'
      ? 'text-white'
      : '';

  return (
    <main className={`mt-20 min-h-screen flex items-center justify-center`}>
      {loading ? (
        <div className={`text-lg font-semibold animate-pulse ${loadingThemeClass}`}>
          Loading...
        </div>
      ) : (
        <ProductSection products={products} />
      )}
    </main>
  );
};

export default Home;
