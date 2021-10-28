import React from 'react';
import './categories.css';

function Categories() {
    return (
        <>
          <h1 id="category-title"> Categories </h1>
        <div class="categories">
            <div class="category__item">
                <h1 class="category__name"> Vegetables</h1>
                <img src="https://i.ibb.co/HH1NDcB/vegetables.jpg" alt="__category_image" class="category__image"/>                     
            </div>

            <div class="category__item">
                <h1 class="category__name"> Fruits</h1>
                <img src="https://i.ibb.co/hFByXbv/fruits.jpg" alt="__category_image" class="category__image"/>                     
            </div>

            <div class="category__item">
                <h1 class="category__name">Daily Essentials</h1>
                <img src="https://i.ibb.co/q1c4dDd/daily-essentials.jpg" alt="__category_image" class="category__image"/>                     
            </div>

            <div class="category__item">
                <h1 class="category__name"> Sanitizers</h1>
                <img src="https://i.ibb.co/WB2Y9z8/sanitation.jpg" alt="__category_image" class="category__image"/>                     
            </div>

            <div class="category__item">
                <h1 class="category__name"> Covid Essentials</h1>
                <img src="https://i.ibb.co/xGkkjrZ/Covid-Essentials.png" alt="__category_image" class="category__image"/>                     
            </div>
        </div>  
        </>
    )
}

export default Categories
