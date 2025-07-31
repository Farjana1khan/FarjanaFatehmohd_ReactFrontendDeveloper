import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface Props {
  title: string;
  description: string;
  image: string;
  price: number;
}
const ProductCard: React.FC<Props> = ({ title, description, image, price }) => {
  const { theme } = useTheme();

  const cardAnimation =
    theme === 'theme3'
      ? 'animate-slide-in-right'
      : '';

  const buttonAnimation = theme === 'theme2' ? 'animate-bounce-in' : '';

  return (
    <div className={`bg-white dark:bg-white p-4 rounded shadow w-full max-w-full mx-auto ${cardAnimation}`}>
      <div className="h-32 w-full flex items-center justify-center overflow-hidden rounded mb-2">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
<div className={`${buttonAnimation}`}>
   <h4 className="text-md truncate">{title}</h4>
      <p className="text-sm line-clamp-2">{description}</p>
      <div className="my-2">${price}</div>
</div>
   

      <button className={`w-full py-2 text-sm rounded justify-center border ${buttonAnimation}`}>
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
