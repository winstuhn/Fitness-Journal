import React, { useState, useEffect }  from "react";
import Table from "../components/Table";
import { useNavigate } from 'react-router-dom';


function HomePage({ setExerciseToEdit }) {
    const navigate = useNavigate();
      
    const [exercises, setExercises] = useState([]);

    const onEdit = async exercise => {
      setExerciseToEdit(exercise)
      navigate("/edit-exercises")
    }

    const loadExercises = async () => {
      const response = await fetch('/exercises');
      const data = await response.json();
      setExercises(data);
    }

    const onDelete = async _id => {
      const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
      if (response.status === 204) {
        const getResponse = await fetch('/exercises');
        const data = await getResponse.json();
        setExercises(data);
      } else {
    console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
      }
    }	
      
    useEffect(() => {
      loadExercises();
    }, []);


    return (
      <article className="main-bodies">
      <h2>This is the home page of the Exercise Diary.</h2>
      <p> Track your fitness progress using the table below: </p>
      <Table 
        exercises={exercises}
        onEdit = {onEdit}
        onDelete = {onDelete}
        />
      </article>
    )
}
  
export default HomePage;