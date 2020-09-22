import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { GlobalContext } from '../Context/GlobalState'

const NameList = () => {
    const { names, removeName } = useContext(GlobalContext)
    
    return (
        <ListGroup className="mt-4">
            {names.map(name => (
                            <ListGroupItem  key={name.id} className="d-flex"> 
                            <strong>{name.name}</strong>
                            <div className="ml-auto">
                                <Link className="btn btn-warning mr-1" to={`/edit/${name.id}`}>Edit</Link>
                                <Button onClick={() => removeName(name.id)} color ="danger" type="submit"> Delete</Button>
                            </div>
                        </ListGroupItem>
            ))}

        </ListGroup>
    )
}

export default NameList