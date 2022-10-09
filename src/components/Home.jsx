import { Button, FormControl, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import Todo from './Todo'

const Home = () => {
    const[todo] = useState([
        {
            id: 1,
            title: 'Play',
            isCompleted: false,
        }
    ])
    return (
        <Container maxWidth='sm'>
            <form >
                <FormControl fullWidth={true}>
                    <h1>To-do List</h1>
                    <TextField id="outlined-basic" label="Text here" variant="outlined" />
                    <Button variant="contained" type='submit' style={{marginTop: 10}}>Add</Button>
                </FormControl>
                <Todo todo={todo}/>
            </form>
        </Container>
    )
}

export default Home
