import { useState } from 'react';
import Generator from './components/Generator';
import Hero from './components/Hero';
import Workout from './components/Workout';
import './styles/index.css'; 
import { generateWorkout } from './utils/functions';

function App() {

  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoals] = useState('strength_power')
  

  function updateWorkout(){
    if(muscles.length < 1){
      return;
    }
    let newWorkout = generateWorkout({poison,muscles,goal})
    setWorkout(newWorkout);
    document.getElementById('workout').scrollIntoView({ behavior: 'smooth' });
  }

  return (

    <main className='min-h-screen flex flex-col bg-gradient-to-t from-slate-800
     to-slate-950 text-white text-sm sm:text-base'>

      <Hero />
      <Generator
       poison={poison}
       setPoison={setPoison}
       muscles={muscles}
       setMuscles={setMuscles}
       goals={goal}
       setGoals={setGoals}
       updateWorkout = {updateWorkout}
      />
      {workout && (<Workout workout={workout} />) }
    </main>

  )
}

export default App
