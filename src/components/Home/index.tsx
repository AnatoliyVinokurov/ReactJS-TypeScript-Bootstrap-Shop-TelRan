import Items from './Items';
import Slider from './Slider';

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
const Home: React.FC<Props> = ({ items, onAdd }) => {
    return (
        <body>
            <div className='myslider'>
                <div className='sliderContainerSizeLimit'>
                    <Slider />
                </div>
            </div>

            <div className="container titleText">
                <div className="row">
                    <div className="col-12">
                        <h2>New arrivals</h2>
                    </div>
                </div>
            </div>

            <Items items={items} onAdd={onAdd} />

            <div className="container groupBtnWithPagesNumbers">
                <div className="row">
                    <div className="col-12">
                        <h2>1 2 3 4 5 6</h2>
                    </div>
                </div>
            </div>

        </body>

    )
}

export default Home