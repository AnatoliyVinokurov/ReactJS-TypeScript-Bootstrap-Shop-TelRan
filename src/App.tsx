import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import Guest from './components/Guest';
import Profile from './components/Profile';
import { BrowserRouter } from 'react-router-dom';
import OldNaviBar from './components/OldNaviBar';
import NaviBar from './components/NaviBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { useState } from "react";

interface Item {
  id: number;
  title: string;
  img: string;
  desc: string;
  category: string;
  price: string;
}

const initialItems: Item[] = [
  {
    id: 1,
    title: "Airlift Bra",
    img: "item1.jpg",
    desc: "The Airlift Bra is a revolutionary product that combines style and comfort in one.",
    category: "women",
    price: "35",
  },
  {
    id: 2,
    title: "Basic t-shirt",
    img: "item2.jpg",
    desc: "The Basic t-shirt is a simple and versatile garment that can be worn for any occasion.",
    category: "women",
    price: "35",
  },
  {
    id: 3,
    title: "Nike One",
    img: "item3.jpg",
    desc: "Nike One is a versatile and comfortable pair of leggings designed for all-day wear and different types of workouts.",
    category: "men",
    price: "680",
  },
  {
    id: 4,
    title: "Tracksuit Jacket",
    img: "item4.jpg",
    desc: "Stay stylish and comfortable during your workouts with this sleek and breathable tracksuit jacket.",
    category: "men",
    price: "35",
  },
  {
    id: 5,
    title: "French Terry Shorts",
    img: "item5.jpg",
    desc: "Comfortable and stylish French Terry shorts, perfect for lounging or exercising.",
    category: "men",
    price: "35",
  },
  {
    id: 6,
    title: "Sportwear",
    img: "item6.jpg",
    desc: "Sportwear is a comfortable and functional clothing designed for various physical activities and exercises.",
    category: "kids",
    price: "35",
  },
  {
    id: 7,
    title: "Cropped Jacket",
    img: "item7.jpg",
    desc: "This cropped jacket is a stylish and versatile addition to any wardrobe, perfect for layering over dresses or pairing with high-waisted pants.",
    category: "women",
    price: "35",
  },
  {
    id: 8,
    title: "Hotspur",
    img: "item8.jpg",
    desc: "Stay cozy and comfortable during the colder months with our warm sweater, perfect for layering or wearing on its own.",
    category: "kids",
    price: "35",
  },
  {
    id: 9,
    title: "Basic t-shirt",
    img: "item9.jpg",
    desc: "The Basic T-shirt is a classic, versatile and comfortable wardrobe staple for everyday wear.",
    category: "women",
    price: "45",
  },
  {
    id: 10,
    title: "Fleece Trousers",
    img: "item10.jpg",
    desc: "Fleece Trousers are warm, comfortable and versatile pants that are perfect for outdoor activities or lounging at home.",
    category: "women",
    price: "356",
  },
  {
    id: 11,
    title: "Women's Shorts",
    img: "item11.jpg",
    desc: "Comfortable and stylish women's shorts, perfect for warm weather and casual wear.",
    category: "women",
    price: "125.90",
  },
  {
    id: 12,
    title: "Basic t-shirt",
    img: "item12.jpg",
    desc: "This Basic T-shirt is a versatile and essential piece for any wardrobe, perfect for layering or as a standalone item.",
    category: "women",
    price: "35.45",
  }
];

const App: React.FC = () => {
  const [orders, setOrders] = useState<Item[]>([]);

  const addToOrder = (item: Item) => {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  return (
    <BrowserRouter>
      <NaviBar orders={orders} />
      <Routes>
        <Route path='/' element={<Home items={initialItems} onAdd={addToOrder} />} />
        <Route path='/guest' element={<Guest />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
