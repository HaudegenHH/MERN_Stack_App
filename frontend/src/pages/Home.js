import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  //const [workouts, setWorkouts] = useState(null)
  // using the hook/context instead
  const {workouts, dispatch } = useWorkoutsContext()
  
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if(response.ok){
        //setWorkouts(json)
        // instead dispatch an action
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])
  
  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm /> 
    </div>
  )
}

export default Home;