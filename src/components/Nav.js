import { Padding } from '@mui/icons-material'
import { Stack } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"

import Button from '@mui/material/Button';



function Nav() {
  
  return (
    <div className='Nav'>
      <img src = "https://user-images.githubusercontent.com/71687100/218331319-7963cdd3-9b0a-4413-a167-f31be97956de.jpg"  />
        <div className='Nav__links'>
            {/* <h1 ><Link className='links' to="/">Home</Link></h1> */}
            <Stack  direction="row" spacing={10} alignItems="center" justifyContent="center">     
               
               <Button variant="contained" ><Link className='links' to="/country">Country</Link></Button>
              
            </Stack>
      
        </div> 
    </div>
    
  )
}



export default Nav