import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import {render} from '@testing-library/react'

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

