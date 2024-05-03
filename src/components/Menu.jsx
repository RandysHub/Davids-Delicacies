import React, { useEffect, useContext, useState } from 'react'
import { CartContext } from '../shopping-cart-context';
import Item from './Item';
export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {

    async function handleFetch() {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/meals');
      const resData = await response.json();
      console.log(resData);

      setMeals(resData);
      setIsLoading(false);
    }

    handleFetch();
  }, [])

  return (
    <>
      {isLoading && <p>'Loading'</p>}
      {meals && !isLoading && <ul id='meals'>
        {meals.map((meal) => {
          return <Item key={meal.id} meal={meal} />
        })}
      </ul>}
    </>
  )
}
