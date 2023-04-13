import React, { useState, useEffect } from 'react';
import Todolist from './Todolist';
import Addtodo from './Addtodo';
import Searchtodo from './Searchtodo';
import { auth, db } from './config';
import { collection, doc, addDoc, getDoc, deleteDoc, updateDoc, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Todo() {

  const [user] = useAuthState(auth);  

  const [value] = useCollection(
    collection(db, 'todolist'), where("uid", "==", user?.uid)
  );

  const useCollectionRef = collection(db, "todolist")

  const [items, setItems] = useState([]);

  useEffect(() => {
    // const getdata = async () => {
    //   const data = await getDocs(useCollectionRef);
    //   setItems(data.docs.map((doc) => ({...doc.data})))
    // }
    if (value) {
      setItems(value.docs)
    }
  }, [value])

  const [newTodo, setNewTodo] = useState('');
  const [searchTodo, setsearchTodo] = useState('');

  const handlecheck = async (id) => {
    const docRef = doc(db, 'todolist', id);
    const docSnap = await getDoc(docRef); 
    const change = {checked: docSnap.data().checked ? false : true}
    await updateDoc(docRef, change)
  }

  const handleDelete = async (id) => {
    const dt = doc(db, 'todolist', id);
    await deleteDoc(dt);
  }

  const addTodo = async (e) => {
    e.preventDefault();
    await addDoc(useCollectionRef, {items: newTodo, checked: false})
    setNewTodo('');
  }

  return (
    <>
      <main className='mb-auto m-12'>
        <Addtodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo}></Addtodo>
        <Searchtodo searchTodo={searchTodo} setsearchTodo={setsearchTodo}></Searchtodo>
        <Todolist items={items.filter(item => ((item.data().items).toLowerCase()).includes(searchTodo.toLowerCase()))} handlecheck={handlecheck} handleDelete={handleDelete}></Todolist>
        {/* {
          items &&
          <Todolist items={items} handlecheck={handlecheck} handleDelete={handleDelete}></Todolist>
        } */}
      </main>
    </>
  )
}
