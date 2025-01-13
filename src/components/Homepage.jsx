import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"



const Homepage = () => {
    const navigate=useNavigate();
  return (
    <div className='flex flex-col gap-2'>
         <NavLink to={'/table'}><Button variant="destructive">See Shadcn table</Button></NavLink>
        <NavLink to={'/card'}> <Button variant="outline">See Shadcn card and Form</Button></NavLink>
        <NavLink to={'/sidebar'}><Button variant='destructive'>See Sidebar</Button></NavLink>
        <NavLink to={'/chart'}><Button variant='destructive'>See Charts</Button></NavLink>
        <NavLink to={'/dialog'}><Button variant='destructive'>See dialog popup form</Button></NavLink>
        
       
    </div>
  )
}

export default Homepage