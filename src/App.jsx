import React from 'react'
import { Button } from "@/components/ui/button"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ButtonDemo from './components/ButtonDemo'
import Homepage from './components/Homepage'
import TableDemo from './components/TableDemo'
import FormDemo from './components/FormDemo'

import { AppSidebar } from './components/app-sidebar'
import { CardDemo } from './components/CardDemo'
import { ChartDemo } from './components/ChartDemo'
import DialogForm from './components/DialogForm'
const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/button' element={<ButtonDemo/>} />
          <Route path='/table' element={<TableDemo/>}/>
          <Route path='/form' element={<FormDemo/>}/>
          <Route path='/card' element={<CardDemo/>}/>
          <Route path='/sidebar' element={<AppSidebar/>}/>
          <Route path='/chart' element={<ChartDemo/>}/>
          <Route path='/dialog' element={<DialogForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App