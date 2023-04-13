import React from 'react'
import { AiFillPlusSquare } from 'react-icons/ai'

const Addtodo = ({newTodo, setNewTodo, addTodo}) => {
    return (
        <>
            <form onSubmit={addTodo} className='flex items-center m-2 p-2 rounded-md'>
                <label htmlFor="addTodo">Add Todo - </label>
                <input autoFocus id='addTodo' type="text" placeholder='Add Todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} required className='m-2 p-2 w-9/12  rounded-md border border-slate-300'/>
                <button type='submit' aria-label='Add item' className='text-2xl'>
                    <AiFillPlusSquare />
                </button>
            </form>
        </>
    )
}

export default Addtodo