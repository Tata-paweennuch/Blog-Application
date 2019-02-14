import React from 'react';
import Categories from '../../data/categoryList';
import Category from './Category';

const CategoryMenu = () => {
    let category = Categories.map((category) => {
        return <Category  category={category.category}
                        img={category.img_src}
                        key={category.id} />
    });


    return (
        <div className="category-menu-bar">
            <ul>
                { category }
            </ul>
        </div>
    );
}

export default CategoryMenu;