import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export const EditPage = ({ exerciseToEdit }) => {

    const [name, setName]       = useState(exerciseToEdit.name);
    const [reps, setReps]       = useState(exerciseToEdit.reps);
    const [weight, setWeight]   = useState(exerciseToEdit.weight);
    const [unit, setUnit]       = useState(exerciseToEdit.unit);
    const [date, setDate]       = useState(exerciseToEdit.date);
    
    const navigate = useNavigate();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                _id: exerciseToEdit._id,
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
             alert("Successfully edited the exercise!");
        } else {
             alert(`Failed to edit exercise, status code = ${response.status}`);
        }     navigate("/");
    };

    return (
        <>
        <article>
            <h2>Edit an Exercise Entry</h2>
            <p>Fix a wrong entry using this page!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you editing?</legend>
                    <label>Exercise Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
            
                    <label>Reps: </label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label>Weight: </label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />
                    
                    <label>Unit: </label>
                    <input
                        type="text"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit" />
                    
                    <label>Date: </label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label>
                    <button
                        onClick = {editExercise}
                    >Save</button> </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditPage;