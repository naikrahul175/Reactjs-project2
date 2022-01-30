import React  from 'react';
import "../Css/Dish.css"
export const Dish = ({logout,dish}) => {

//     const [dish, setDish] = useState();

// const fetchData=()=>{
//     fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
//     .then(Response => Response.json())
//     .then(dish =>{
//         setDish(dish);
//         console.log(dish)
//         console.log(" i am here")
//     });
//}
  return (
  <div className='dishList'>
    <h1>Dishes</h1>
    <div className="dishContainer">
      {dish.map((item) => (
        // <li key={item.id}>{item.dishName}</li>
       <div className='card' key={item.id}>
         <div className="cardTitle">
            <p>{item.dishName}</p>
         </div>
        <div className="image">
           <img src={item.image} />    
        </div>
        <div className="description">
          <p>{item.description}</p>
        </div>
        <button className='cardButton'>Vote</button>
     </div>
      ))}
      </div>
     <button  onClick={logout}>Logout</button>
  </div>
  )
};
