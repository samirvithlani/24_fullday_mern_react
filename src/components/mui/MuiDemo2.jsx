import { Button, Fab, IconButton } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
export const MuiDemo2 = () => {
  return (
    <div>
        <h1>Mui demo2 </h1>
        <Button variant='text' color='error' size='large'>INFO</Button>
        <Button variant='contained' size='small'>INFO</Button>
        <Button variant='outlined' size="medium">INFO</Button>
        <Button variant='outlined' size="medium" sx={{backgroundColor:"pink"}}>INFO</Button>
        <IconButton>
            <SendIcon/>
        </IconButton>
        <Button startIcon ={<SendIcon/>}  variant='contained'  >SEND</Button>
        <Button endIcon ={<FingerprintIcon/>}  variant='contained'  >LOCK</Button>
        <Fab>
            <FingerprintIcon/>
        </Fab>
    </div>
  )
}
