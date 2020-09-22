import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { GlobalContext } from '../Context/GlobalState'
import { v4 as uuid } from 'uuid'

const AddName = () => {
    const [name, setName] = useState('')

    const { addName } = useContext(GlobalContext)

    const history = useHistory()

    const submitName = () => {
        const newName = {
            id: uuid(),
            name: name
        }
        addName(newName)
        history.push('/')
    }

    const onChange = e => {
        setName(e.target.value)
    }

    return (
        <Form onSubmit={submitName}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={onChange} placeholder="Enter name"></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default AddName