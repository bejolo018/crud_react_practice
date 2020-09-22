import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { GlobalContext } from '../Context/GlobalState'

const EditName = (props) => {
    const [selectedName, setSelectedName] = useState({
        id: '',
        name: ''
    })

    const { names, editName } = useContext(GlobalContext)

    const history = useHistory()

    const currentNameId = props.match.params.id

    useEffect(() => {
        const nameId= currentNameId
        const selectedName = names.find(name => name.id === nameId)
        setSelectedName(selectedName)
    }, [currentNameId, names])

    const submitName = () => {
        editName(selectedName)

        history.push('/')
    }

    const onChange = e => {
        setSelectedName({...selectedName, [e.target.name]: e.target.value})
    }
    return (
        <Form onSubmit={submitName}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={selectedName.name} onChange={onChange} name="name"></Input>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default EditName