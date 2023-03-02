import RenderItems from './RenderItems'
import Slider from './Slider'

const Home = () => {
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

            <RenderItems />

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