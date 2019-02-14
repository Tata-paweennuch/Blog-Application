import React from 'react';
import CategoryMenu from './categories-img-menu/CategoryMenu';

const Home = () => {
    return (
        <div className="home-page-container">
            <div className="home-page-brand">
                <div>
                    <h2>Find your new favorite blog!</h2>
                    <p>Discover the categories below</p>
                </div>
            </div>
            {/* <h1 className="main-topic">Home page</h1> */}
            <CategoryMenu />
        </div>
    );
}

export default Home;