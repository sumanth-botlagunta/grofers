import React from 'react';
import './todaydeals.css';

function TodayDeals() {
    return (
        <div>
                <h1 id="deals-title">Todays Deal's</h1>
                <div className="today__deals">
        
                <div className="deal__item">
                    <h1 className="item__name">
                        Coconut Oil
                    </h1>
                    <div className="discount">
                        save 40% today
                    </div>
                    <div className="dealimg">
                        <img src="https://i.ibb.co/vPzSgNv/oil.jpg" alt="__deal__item" className='deal__image'/>
                    </div>
                </div>

                <div className="deal__item">
                    <h1 className="item__name">
                        Sanitizer
                    </h1>
                    <div className="discount">
                        save 50% today
                    </div>
                    <div className="dealimg">
                        <img src="https://i.ibb.co/6sPnpfR/detol.png" alt="__deal__item" className='deal__image'/>
                    </div>
                </div>

                <div className="deal__item">
                    <h1 className="item__name">
                        Onions
                    </h1>
                    <div className="discount">
                        save 30% today
                    </div>
                    <div className="dealimg">
                        <img src="https://i.ibb.co/G2fxxp4/onion.jpg" alt="__deal__item" className='deal__image'/>
                    </div>
                </div>

                <div className="deal__item">
                    <h1 className="item__name">
                        Face cover Masks
                    </h1>
                    <div className="discount">
                        save 60% today
                    </div>
                    <div className="dealimg">
                        <img src="https://i.ibb.co/72tq58m/masks.jpg" alt="__deal__item" className='deal__image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayDeals
