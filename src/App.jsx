import React, { useState } from 'react';
import Heatercomp from './companents/Heatercomp';
import Footercomp from './companents/Footercomp';
import TaskShopingCard from './TaskShopingCard';
import './style/AppComp.css'


const App = () => {
  const [CardCound,SetCardCound]=useState(0)
    const ProductsData=[{
      id: 1,
      img: "img",
      productsName: "Fancy product",
      rate: "$40.00-$80.00",
      button: "View options",
    },
    {
      id: 2,
      img: "img",
      productsName: "Special Item",
      rate: "$18.00",
      button: "Add to card",
    },
    {
      id: 3,
      img: "img",
      productsName: "Sale Item",
      rate: "$25.00",
      button: "Add to card",
    },
    {
      id: 4,
      img: "img",
      productsName: "Popular Item",
      rate: "$40.00",
      button: "Add to card",
    },
    {
      id: 5,
      img: "img",
      productsName: "Sale Item",
      rate: "$25.00",
      button: "Add to card",
    },
    {
      id: 6,
      img: "img",
      productsName: "Fancy Product",
      rate: "$120.00-280.00",
      button: "View options",
    },
    {
      id: 7,
      img: "img",
      productsName: "Special Item",
      rate: "$18.00",
      button: "Add to card",
    },
    {
      id: 8,
      img: "img",
      productsName: "Popular Item",
      rate: "$40.00",
      button: "Add to card",
    },]

    const [Products,SetProducts]=useState(ProductsData)
    
    
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  {/* <li><hr class="dropdown-divider"></li> */}
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark" type="submit">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {" "}
                  {CardCound}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
            
            <Heatercomp/>
         <br />
             
        {Products.map((card)=>{
          return(
                 <>
                
                        <TaskShopingCard   card={card} SetCardCound={SetCardCound}  />      
                 </>

          )
        })}
<br />
<Footercomp/>  
        </div>
    );
};

export default App;