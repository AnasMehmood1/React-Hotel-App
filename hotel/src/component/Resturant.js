import React, { useState,useEffect } from 'react'
import "./Resturantstyle.css"
import Rest from "./ResturantApi"

const Resturant = () => {
  const [menuData, setMenuData] = useState(Rest);
  const [selectedCategory, setSelectedCategory] = useState(''); // Add state for selected category

  const filter = (category) => {
    const update = Rest.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(update);
    setSelectedCategory(category); // Update selected category state

    // Update URL with selected category
    window.history.pushState(null, '', `?category=${category}`);
  };

  // ... (rest of your component)

useEffect(() => {
  // Parse the category parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const urlCategory = urlParams.get('category');

  if (urlCategory) {
    filter(urlCategory);
  } else {
    filter('Mains'); // Default category when no parameter is provided
  }
}, []);

  return (

   <>
    
    <>
    <div className="rest-hero">
        <div className="mask">
            <img className='image' src="/image/hero_3.jpg" alt="img" />
        </div>
        <div className="all-sec">
        <div className="text">
            <h1>Our Restaurant <br /> Menu</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim itaque alias quis labore rem voluptatibus, neque soluta accusantium magni nostrum.</p>
        </div>
        <div className="menu">
            <div className="button-group">
                <button className='button-item' onClick={()=> filter("Mains")} >Mains</button>
                <button className='button-item'onClick={()=> filter("dessert")}>desserts</button>
                <button className='button-item'onClick={()=> filter("drinks")}>Drinks</button>
            </div>
        </div>
      <div className="card-container">
       
               {menuData.map((curElem,id)=>{
                return(
                  <div className="cards-item" key={id}>
                    <div className="card">
                    <div className="price">${curElem.price}</div>
                    <h2 className='title'>{curElem.title}</h2>
                    <p>{curElem.para}</p>
                </div>
                </div>
                )
               })}
         
       
      </div>
      </div>
      </div>
    </>
   </>
  )
};

export default Resturant
