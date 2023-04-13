import React from 'react'

const Searchtodo = ({searchTodo, setsearchTodo}) => {
    return (
        <>
            <div action="addForm" className='flex items-center m-2 p-2 rounded-md'>
                <label htmlFor="searchTodo">Search Todo - </label>
                <input id='addTodo' type="text" placeholder='Search Todo' value={searchTodo} onChange={(e) => setsearchTodo(e.target.value)} className='m-2 p-2 w-9/12  rounded-md border border-slate-300'/>
            </div>
        </>
    )
}

export default Searchtodo