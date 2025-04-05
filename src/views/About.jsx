import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar, TextField } from '@mui/material'


function About() {
    return (
        <div>
            <Box sx={{  display: 'flex', justifyContent: 'center'   }}>
                <Typography sx={{
                    color: '#FFFFFF',
                    fontSize: '50px',
                    fontWeight: 'bold'
                }}>
                    About
                </Typography>
            </Box>

        </div>
    )
}

export default About