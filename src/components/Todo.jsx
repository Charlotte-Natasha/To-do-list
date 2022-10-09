import { Card, CardContent, Container, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';


const Todo = (props) => {
    return (
        <Container>
            <Card variant='outlined' sx={{marginTop: 8, background: 'grey'}}>
                <CardContent>
                    <Typography>
                        <IconButton aria-label="delete">
                            <CheckIcon/>
                        </IconButton>
                            {props.text}
                        <IconButton aria-label="delete" style={{float: 'right'}}>
                            <DeleteIcon/>
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Todo
