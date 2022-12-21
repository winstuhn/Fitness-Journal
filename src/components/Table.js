import React from "react";
import Row from './Row';

function Table({exercises, onDelete, onEdit}) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercises, i) => 
                <Row 
                exercises={exercises} 
                key={i}
                onDelete = {onDelete}
                onEdit = {onEdit}/>)}
            </tbody>
        </table>
    )
}

export default Table;