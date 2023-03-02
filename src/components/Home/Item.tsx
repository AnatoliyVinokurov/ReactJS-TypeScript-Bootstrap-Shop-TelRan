import React, { useState } from 'react';

interface ItemProps {
  item: {
    id: number;
    title: string;
    img: string;
    desc: string;
    category: string;
    price: string;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='item'>
      <img src={'./img/' + item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price} $</b>
      <div className='add-to-cart' onClick={() => setCount(count + 1)}>
        +
      </div>
      <div>{count}</div>
    </div>
  );
};

export default Item;
