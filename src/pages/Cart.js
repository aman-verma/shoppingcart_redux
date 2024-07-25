import React from 'react';
import { useTitle } from '../hooks/useTitle';
import { useSelector } from 'react-redux';
import { CartCard } from '../components';

export const Cart = () => {
  useTitle('Cart');
  const cartList = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);

  return (
    <main>
      <h1>
        Cart Items: {cartList.length} / $ {total}
      </h1>
      <section className='cart'>
        {cartList.map((product) => {
          return <CartCard key={product.id} product={product} />;
        })}
      </section>
    </main>
  );
};
