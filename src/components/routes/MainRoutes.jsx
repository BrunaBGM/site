import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Locacao from '../Locacao'

export default function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/locacao' element={<Locacao/>}/>
        </Routes>
    )
}