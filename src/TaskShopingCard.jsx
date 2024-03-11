import React, { useState } from 'react';



const TaskShopingCard = ({card,SetCardCound}) => {
    const [Status,SetStatus]=useState(true)

    const Addcard=()=>{
                 SetStatus(false)
                 SetCardCound(val=>val+1)
               }
          
               const Removecard=()=>{
                 SetStatus(true)
                 SetCardCound(val=>val-1)
               }
    return(
<section className='section'>       
        <div className='card'>                    
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
                                    <h5 className="fw-bolder">{card.productsName}</h5>
                                    <h4>{card.rate}</h4>                                         {/* <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div> */}
                                {Status?<button onClick={Addcard} className='add'>Add to card</button> 
                  :<button onClick={Removecard} className='remove'>Remove from card</button>}                   
            </div>      
             
 </section>
 
    );
};

export default TaskShopingCard;