// Styles
import MealItem from '../MealItem/MealItem'
import styles from './mealsGrid.module.css'

export default function MealsGrid({meals}){
  return(
    <ul className={styles.meals}>
      {meals.map(meal => 
        <li key={meal.id}> 
          <MealItem {...meal}  />
        </li>
      )}
    </ul>
  )
}