import React from 'react'
import { MdDelete } from "react-icons/md";

const Todo = ({id, item, handlecheck, handleDelete}) => {
    return (
        <li className='item flex items-center bg-slate-300 m-2 p-2 rounded-md'>
            <input type="checkbox" checked={item.checked} onChange={() => handlecheck(id)} className='h-10 w-10 m-2' />
            {(item.checked) ? <label className='line-through'>{item.items}</label> : <label>{item.items}</label>}
            <MdDelete role="button" tabIndex="0" onClick={() => handleDelete(id)} className='m-1 h-10 w-10 ml-auto hover:text-red-600'></MdDelete>
        </li>
    )
}

export default Todo