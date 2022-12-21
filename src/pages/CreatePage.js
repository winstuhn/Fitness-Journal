import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export const CreateExercise = () => {

    const getInitialState = () => {
        const value = "Kgs";
        return value;
      };

    const [name, setName]       = useState('');
    const [reps, setReps]       = useState('');
    const [weight, setWeight]   = useState('');
    const [unit, setUnit]       = useState(getInitialState);
    const [date, setDate]       = useState('');
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUnit(e.target.value);
      };

    const addExercise = async () => {
        const newMovie = { name, reps, weight, unit, date };
        const response = await fetch('/create-exercises', {
            method: 'POST',
            body: JSON.stringify(newMovie),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the diary!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        navigate("/");
    };

    return (
        <>
        <article>
            <h2>Create an Exercise Entry</h2>
            <p>Put a new entry into your exercise diary using the form below!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which Exercise are you adding?</legend>
                    <label htmlFor="name">Exercise Name</label>
                    <input
                        type="text"
                        placeholder = "Name of the Exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label htmlFor="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        placeholder = "Reps completed"
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label htmlFor="weight">Weight</label>
                    <input
                        type="number"
                        value={weight}
                        placeholder = "Weight lifted"
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />
                    
                    <label htmlFor="unit">Unit</label>
                    <select value={unit} onChange={handleChange}>
                        <option value="kgs">Kgs</option>
                        <option value="lbs">Lbs</option>
                        <option value="stone">Stone</option>
                    </select>

                    
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        placeholder = "Date completed"
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label htmlFor="submit">
                    <button
                        type="submit"
                        onClick = {addExercise}
                        id="submit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default CreateExercise;