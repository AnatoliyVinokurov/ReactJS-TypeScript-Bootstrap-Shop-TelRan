import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from './Item';
import ItemTestBootstrap from './ItemTestBootstrap';

interface Item {
  id: number;
  title: string;
  img: string;
  desc: string;
  category: string;
  price: string;
}

interface Props {
  items: Item[];
  onAdd: (item: Item) => void;
}

const Items: React.FC<Props> = ({ items, onAdd }) => {
  return (
    <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
    <Row className="row">
      {items.map((el) => (
        <ItemTestBootstrap key={el.id} item={el} onAdd={onAdd} />
      ))}
            </Row>
      </Container>
  );
};

export default Items;
