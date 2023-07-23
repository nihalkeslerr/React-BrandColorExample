import React, { useState } from 'react'
import Search from './Search'
import BrandData from '../brands.json'
import Brands from './Brands';

function Content() {
    console.log(BrandData);
    const BrandsArray = [];
    Object.keys(BrandData).map(key=>{
        BrandsArray.push(BrandData[key])
    })

    const [brands, setBrands]= useState(BrandsArray);
  return (
    <main className='content'>
        <header className='header'>
            <Search></Search>
        </header>
        <section className='brands'>
            {brands.map((brand,i)=>(
                 <Brands key={i} brand={brand}/>
            ))}

        </section>

    </main>
  )
}

export default Content