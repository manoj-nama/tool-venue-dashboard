import React from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import "./Charts.css";

function Charts(props) {
  
  //dummy data
  const data = [
    {Venue: 'Venue1', Users: 55},
    {Venue: 'Venue2', Users: 20},
    {Venue: 'Venue3', Users: 50},
    {Venue: 'Venue4', Users: 15},
    {Venue: 'Venue5', Users: 30}
  ];
  
  //{names.map((data)=><Typography align="center" variant="h6">Top 5 Venues with {data.Name}</Typography>)}

  return (
    <div className="line">
      <Box sx={{ width: 330 }} className="box">
      <Typography  align="center" variant="h6" className='typo'>Top 5 Venues with Most </Typography>

      <Typography display="block" align="center" variant="h6" className='typo'>{props.name}</Typography>

      {data.map((user)=>
      
      <Slider
      name={user.Venue}
      className="slide"
      defaultValue={user.Users}
      valueLabelDisplay="auto"
      sx={{
       width: 330,
       color: props.name==="Users"?'orange':props.name==="Bets Placed/Hr"?'blue':'green'
      }}
    
      />
      )}
      
  </Box>
  
  <Link href="/venue" sx={{ 
   bgcolor: "green", color:"white" }} className="textven" underline="none" >Show More </Link> 

    
  
</div>
  )
}

export default Charts

