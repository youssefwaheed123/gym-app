/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import Buttton from './Buttton';

function Header(props) {
    // eslint-disable-next-line react/prop-types
    const {index, title, description} = props;
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 justify-center'>
                <p className='text-3xl sm:text-4xl md:tex-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-base sm:text-2xl mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const [showModal, setShowModal] = useState(false);
    const {poison, setPoison, muscles, setMuscles, goals, setGoals, updateWorkout}= props;

    function handleShowModal(){
        setShowModal(!showModal);
    }

    function updateMuscles(muscleGroup){
        if(muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(val => val!= muscleGroup));
            return;
        }

        if(muscles.length > 2){
            return;
        }
        if(poison !== 'individual') {
            setMuscles([muscleGroup]);
            setShowModal(false);
            return;
        }
       

        setMuscles([...muscles, muscleGroup])
        if(muscles.length === 2){
            setShowModal(false);
        }
    }


  return (
    <div className='min-h-screen '>
        <SectionWrapper id={"generate"} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock'] }>
            <Header index={'01'} title={"Pick your poison"} description={"Select the workout you need to endure."}/>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {Object.keys(WORKOUTS).map((type, index)=>{
                return (
                    <button
                        onClick={() =>  {setPoison(type), setMuscles([])}}
                        className={`bg-slate-950 border py-4 rounded-lg hover:border-blue-600 px-4 ${type === poison ? 'border-blue-600' : 'border-blue-400'}`}
                        key={index}
                    >
                     <p className='capitalize text-lg sm:text-md'>{type.replaceAll("_", " ")}</p>
                     </button>

                )
            })}
            </div>
            <Header index={'02'} title={"Lock on targets"} description={"Select the muscles judged for annihilation."}/>
            <div className='bg-slate-950 py-3 border border-solid border-blue-400 rounded-lg flex flex-col'>
                <button className='relative flex items-center justify-center mb-2' onClick={handleShowModal}>
                    <p className='capitalize'>{muscles.length===0  ? 'Select muscle groups' : muscles.join(' ')}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>
                {
                    showModal && (
                    <div className='flex flex-col'>
                        {  (poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, index)=>{
                            return (
                                <button onClick={()=>updateMuscles(muscleGroup)} key={index} className={`hover:text-blue-400 duration-200 ${muscles.includes(muscleGroup) ? 'text-blue-400' : ''}` } >
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )    
                        })}
                    </div>
                    )
                }
            </div>
            <Header index={'03'} title={"Become Juggernaut"} description={"Select your ultimate objective."}/>
            <div className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
            {Object.keys(SCHEMES).map((scheme, index)=>{
                return (
                    <button
                        onClick={() => setGoals(scheme)}
                        className={`bg-slate-950 border py-4 rounded-lg hover:border-blue-600 px-4 ${scheme === goals ? 'border-blue-600' : 'border-blue-400'}`}
                        key={index}
                    >
                     <p className='capitalize text-lg sm:text-md'>{scheme.replaceAll("_", " ")}</p>
                     </button>
                )
            })}
            </div>

            <Buttton func={updateWorkout}  text="Formulate" />
            
        </SectionWrapper>
        
    </div>
  )
}
