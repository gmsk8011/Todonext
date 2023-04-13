import React from 'react'
import Todo from './Todo'

const Todolist = ({items, handlecheck, handleDelete}) => {
    return (
        <ul>
            {items.map((item) => (
            <Todo key = {item.id} id = {item.id} item = {item.data()} handlecheck = {handlecheck} handleDelete = {handleDelete}></Todo>
            ))}
        </ul>
    )
}

export default Todolist