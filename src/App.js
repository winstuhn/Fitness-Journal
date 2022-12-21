import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';

import Navigation from './components/Nav'
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import CreateExercise from './pages/CreatePage';

function App() {  

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <h1> Exercise Diary</h1>
      <p> Who said meat-heads can't use their brains?</p>
      <p> Track your workouts for optimal gains.</p>

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>} />
          <Route path="edit-exercises" element={<EditPage exerciseToEdit={exerciseToEdit} />} />
          <Route path="create-exercises" element = {<CreateExercise/>}/>
        </Routes>
      </BrowserRouter>

      <footer>
      © 2022 Winston Chan
      </footer>


    </div>
  );
}

export default App;
