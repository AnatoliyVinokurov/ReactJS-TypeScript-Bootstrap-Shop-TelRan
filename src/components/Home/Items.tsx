import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from './Item';
import ItemTestBootstrap from './ItemTestBootstrap';

interface ItemsProps {
  items: {
    id: number;
    title: string;
    img: string;
    desc: string;
    category: string;
    price: string;
  }[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
    <Row className="row">
      {items.map((el) => (
        <ItemTestBootstrap key={el.id} item={el} />
      ))}
            </Row>
      </Container>
  );
};

export default Items;
