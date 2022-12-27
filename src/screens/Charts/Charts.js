import React from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


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
      <Box sx={{ width: 320 }}>
      <Typography align="center" variant="h6">Top 5 Venues with Most {props.name}</Typography>
      {data.map((user)=>
      
      <Slider
      name={user.Venue}
      defaultValue={user.Users}
      valueLabelDisplay="auto"
      sx={{
       width: 300,
       color: props.name==="Users"?'orange':props.name==="Bets"?'blue':'green'
      }}
    
      />
      )}
      
      
  </Box>       

</div>
  )
}

export default Charts

/*
{data.map((user)=>
      
      <Slider
      name={user.Venue}
      defaultValue={user.Users}
      valueLabelDisplay="auto"
      sx={{
       width: 300,
       color: props.name==="Users"?'orange':props.name==="Bets"?'blue':'green'
      }}
    
      />
      )}
*/