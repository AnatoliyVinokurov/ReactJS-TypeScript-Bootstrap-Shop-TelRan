import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
  
  const ItemTestBootstrap: React.FC<ItemProps> = ({ item }) => {
    const [count, setCount] = useState<number>(0);
  
    return (




                <Col className="col-lg-3 col-sm-6 mb-3">
                        <Card className="card h-100" style={{ width: '18rem' }}>
                            <Card.Img variant='top' src={'./img/' + item.img} alt={item.title} />
                            <Card.ImgOverlay>
                                <Container className="row">
                                    <Button variant="light" className='col-2 add-to-cart' onClick={() => setCount(count + 1)}>
                                        <i className="fas fa-cart-plus"></i>
                                    </Button>
                                </Container>
                            </Card.ImgOverlay>
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
                                    <div>{count}</div>
                                </section>
                            </Card.Body>
                        </Card>
                    </Col>

    );
};

export default ItemTestBootstrap;