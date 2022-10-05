import { IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = (props) => {
    return (
        <div>
            <Typography>
                {props.text}
            </Typography>
            
            <IconButton aria-label="delete">
                <DeleteIcon/>
            </IconButton>
        </div>
    )
}

export default Todo
