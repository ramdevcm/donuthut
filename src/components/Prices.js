import React from 'react';
import donut1 from '../img/donut1.jpg'
import donut2 from '../img/donut2.jpg'
import donut3 from '../img/donut3.jpg'
import donut4 from '../img/donut4.jpg'
import donut5 from '../img/donut5.jpg'
import donut6 from '../img/donut6.jpg'

const Prices = () => {
    return (
        
        <div className='prices'>
            <h1> OUR SPECIALS FOR YOU</h1>
            <div className="container-custom">
            
                <div className="row-custom">
                    <div className="col-4-custom card">
                        <div className="price">
                            <div className="price__img">
                                <img src={donut1} alt="donut"/>
                            </div>
                            <h1 className="price__heading">
                                Donut Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <p className="price_rs">
                                75rs
                            </p>
                        </div>
                    </div>

                    <div className="col-4-custom card">
                        <div className="price">
                            <div className="price__img">
                                <img src={donut2} alt="donut"/>
                            </div>
                            <h1 className="price__heading">
                                Donut Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <p className="price_rs">
                                80rs
                            </p>
                        </div>
                    </div>

                    <div className="col-4-custom card">
                        <div className="price">
                            <div className="price__img">
                                <img src={donut3} alt="donut"/>
                            </div>
                            <h1 className="price__heading">
                                Donut Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <p className="price_rs">
                                100rs
                            </p>
                        </div>
                    </div>

                    <div className="col-4-custom card">
                        <div className="price">
                            <div className="price__img">
                                <img src={donut4} alt="donut"/>
                            </div>
                            <h1 className="price__heading">
                                Donut Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <p className="price_rs">
                                80rs
                            </p>
                        </div>
                    </div>

                    <div className="col-4-custom card">
                        <div className="price">
                            <div className="price__img">
                                <img src={donut5} alt="donut"/>
                            </div>
                            <h1 className="price__heading">
                                Donut Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <p className="price_rs">
                                99rs
                            </p>
                        </div>
                    </div>

                    <div className="col-4-custom card">
                        <div className="price">
                            <div className="price__img">
                                <img src={donut6} alt="donut"/>
                            </div>
                            <h1 className="price__heading">
                                Donut Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <p className="price_rs">
                                89rs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
