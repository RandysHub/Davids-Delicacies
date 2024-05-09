import Item from './Item';
import useHttp from '../hooks/useHttp';

const requestConfig = {};

export default function Menu() {
  const { data: meals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) return <p>'Loading'</p>
  console.log(meals)
  return (
    <>
      {meals && <ul id='meals'>
        {meals.map(meal => {
          return <Item key={meal.id} meal={meal} />
        })}
      </ul>}
    </>
  )
}
