import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
  
  const ItemTestBootstrap: React.FC<Props> = ({ item, onAdd }) => {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        onAdd(item);
      };
  
    return (




                <Col className="col-lg-3 col-sm-6 mb-3">
                        <Card className="card h-100" style={{ width: '18rem' }}>
                            <Card.Img variant='top' src={`./img/${item.img}`} alt={item.title}  />
                                <Container className="row">
                                    <Button variant="light" className='col-2 add-to-cart'  onClick={handleClick}>
                                        <i className="fas fa-cart-plus"></i>
                                    </Button>
                                </Container>
                            <Card.Body>
                                <Card.Text>
                                    <section className='starsRatingButtonsGroup'>
                                        <ul className='starsRatingButtonsGroupUL' data-mdb-toggle='rating' data-mdb-readonly='true' data-mdb-value='3'>
                                            <li><i className='fa-star fa-sm text-primary fas active'></i></li>
                                            <li><i className='fa-star fa-sm text-primary fas active'></i></li>
                                            <li><i className='fa-star fa-sm text-primary fas active'></i></li>
                                            <li><i className='far fa-star fa-sm text-primary'></i></li>
                                            <li><i className='far fa-star fa-sm text-primary'></i></li>
                                        </ul>
                                    </section>
                                </Card.Text>
                                <Card.Text>#{item.id}</Card.Text>
                                <section className='sectionPriceOfGoods'>
                                    <Card.Title className='sectionPriceOfGoodsName'>{item.title}</Card.Title>
                                    <Card.Title className='sectionPriceOfGoodsPrise'>${item.price}</Card.Title>
                                    
                                    <Button variant="light" onClick={() => setCount(count - 1)}><i className="fas fa-angle-double-left"></i></Button>
                                    <div>{count}</div>                                    
                                    <Button variant="light" onClick={() => setCount(count + 1)}><i className="fas fa-angle-double-right"></i></Button>


                                </section>
                            </Card.Body>
                        </Card>
                    </Col>

    );
};

export default ItemTestBootstrap;