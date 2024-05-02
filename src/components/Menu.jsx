import React, { useEffect, useState } from 'react'
import Item from './Item';
export default function Menu() {
  const [meals, setMeals] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    async function handleFetch() {
      const response = await fetch('http://localhost:3000/meals');
      const resData = await response.json();
      console.log(resData);

      setMeals(resData.meals);
      setIsLoading(false);
    }

    handleFetch();
  }, [])

  return (
    <div id='meals'>
      {isLoading && <p>'Loading'</p>}
      <ul>
        {meals.map((meal) => {
          <Item key={meal.id} desc={meal.description} name={meal.name} price={meal.price} />
        })}
      </ul>

    </div>
  )
}
