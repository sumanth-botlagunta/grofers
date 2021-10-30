import React from 'react';
import './categories.css';

const Categories = (props) => {

     const categorylist = ({categorylist}) => {
        if(categorylist){
            return categorylist.map(item =>{
                return(
                        <div class="category__item" key={item.category_id}>
                            <h1 class="category__name">{item.categoryname}</h1>
                            <img src={item.category_image} alt="__category_image" class="category__image"/>                     
                        </div>
                )
            })
        }
     }

     
    return (
        <>
          <h1 id="category-title"> Categories </h1>
        <div class="categories">
            {categorylist(props)}
        </div>  
        </>
    )
}

export default Categories
