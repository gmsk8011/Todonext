import React, { useState, useEffect } from 'react'
import { auth, provider } from './config'
import { signInWithPopup } from 'firebase/auth'
import {FcGoogle} from 'react-icons/fc'


export default function Header() {
    const [save, setsave] = useState('')
    const [name, setname] = useState('')
    const signup = () => {
        signInWithPopup(auth, provider).then((data) => {
            setsave(data.user.email)
            setname(data.user.displayName)
            localStorage.setItem('email', data.user.email)
            localStorage.setItem('name', data.user.displayName)
        })
    }

    const signout = () => {
        localStorage.clear();
        window.location.reload();
    }

    useEffect(() => {
        setsave(localStorage.getItem('email'))
        setname(localStorage.getItem('name'))
    }, [])

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-black p-5">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Todos List</span>
                </div>
                <div className='flex items-center'>
                    {
                        save ? <>
                        <div className='text-white mx-4'>
                            {name}
                        </div>
                            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={signout}>
                                Sign out
                            </button>
                        </> :
                            <button className="flex items-center bg-black border-2 border-white hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full" onClick={signup}>
                                <FcGoogle className='mr-2'/>
                            Sign in with Google
                            </button>
                    }
                </div>
            </nav>
        </>
    )
}