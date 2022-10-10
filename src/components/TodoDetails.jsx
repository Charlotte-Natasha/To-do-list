import {useLoaderData} from "react-router-dom";
import React from 'react';

// This component stands for a single todo, only for demonstration purposes.
const TodoDetails = () => {
    // useLoaderData accesses the data loaded through the 'loader' function in the routes.jsx.
    const todo = useLoaderData();
    // 'React.Fragment' can be used to return multiple elements that do not belong together, e.g. not in a list or something like that.
    return <React.Fragment>
        <h1>Details!</h1>
        <p>{todo.id}</p>
        <p>{todo.name}</p>
    </React.Fragment>;
}

export default TodoDetails;