import React from 'react';
import { Typography } from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function Date() {
  return (
    <div>
        <Typography sx={{color:"gray",backgroundColor:"white", width:"110px"}}>
            Select Date
        </Typography>
        
        
        
        
    </div>
  )
}

export default Date
/*
<LocalizationProvider 
  dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out' }}
        >
          <DesktopDatePicker/>
        </LocalizationProvider>*/