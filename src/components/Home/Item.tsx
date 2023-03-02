import React from 'react';

interface ItemProps {
  id: number;
  title: string;
  img: string;
  desc: string;
  category: string;
  price: string;
}

interface Props {
  item: ItemProps;
  onAdd: (item: ItemProps) => void;
}

const Item: React.FC<Props> = ({ item, onAdd }) => {
  const handleClick = () => {
    onAdd(item);
  };

  return (
    <div className='item'>
      <img src={`./img/${item.img}`} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{`${item.price} $`}</b>
      <div className='add-to-cart' onClick={handleClick}>
        +
      </div>
    </div>
  );
};

export default Item;
