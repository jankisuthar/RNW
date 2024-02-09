import React from 'react';
import Header from './header';
import Hero from './Hero';
import Product from './Product'
import Filter from './Filter'

function Index(props) {
    return (
       <>
       <Header/>
        {/* <Hero/> */}
        {/* <Product/> */}
        <Filter/>
       </>
    );
}

export default Index;