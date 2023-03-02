import React from 'react';

interface Item {
    id: number;
    title: string;
    img: string;
    price: string;
}

interface Props {
    item: Item;
}

const Order: React.FC<Props> = ({ item }) => {
    const { id, title, img, price } = item;
    return (
        <div className='item'>
            <img src={`./img/${img}`} alt={title} />
            <h2>{title}</h2>
            <b>{price} $</b>
        </div>
    );
};

export default Order;
