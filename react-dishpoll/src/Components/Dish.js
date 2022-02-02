import React, { useState }  from 'react';
import { DishRanking } from "./DishRanking";
import "../Css/Dish.css"

export const Dish = ({logout,dish,user}) => {

  const [counter, setCounter] = useState(false);
  const [dishRank, setDishrank] = useState({id:"",rank:"",userid:""});

  const rank=[30,20,10]
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
let count=1;
const handleClick =(item,rank)=>{
  // console.log(item.id)
  // console.log(user.email)
  console.log(count);
    if(count < 4)
    {
      console.log(item.id,item.dishName)
      console.log(rank);
      console.log(count);

      if(count == 3)
      {  //set counter only when user click 3 times
       setCounter(true);
      }
      
      // setDishrank(
      //  { id:item.id,
      //   rank:rank,
      //   userid:user.id
      // })
      // console.log(dishRank.id, dishRank.rank,, dishRank.userid)
 
  count++;

        // alert("u have done the selection 3 times")
      //  return(
      //    <>
      //    {console.log("i am inside new page ")}
      //    <Rank />
      //    </>
      //  );
    
    }

    // const rank =()=>{
    //   return(
    //     <div className="rankPage">
    //       welcome to the rank page ,u took so much time to come here
    //     </div>
    //   );
    // }
}
  return (
    <>
  { (counter)? <DishRanking user={user} dishrank={dishRank}/>:
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
           <img src={item.image} alt="dish-item"/>
        </div>
        <div className="description">
          <p>{item.description}</p>
        </div>
       <button className='cardButton'  onClick={()=>handleClick(item,rank[0])}>Rank 1</button>
        <button className='cardButton'  onClick={()=> handleClick(item,rank[1])}>Rank 2</button>
        <button className='cardButton' onClick={()=> handleClick(item,rank[2])}>Rank 3</button>
     </div>
      ))}
      </div>
     <button  onClick={logout}>Logout</button>
  </div>
}
  </>
  )
};
