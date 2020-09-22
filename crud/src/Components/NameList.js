import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

const NameList = () => {
    return (
        <ListGroup className="mt-4">
            <ListGroupItem className="d-flex"> 
                <strong>User one</strong>
                <div className="ml-auto">
                    <Link className="btn btn-warning mr-1" to="/edit/1">Edit</Link>
                    <Button color ="danger" type="submit"> Delete</Button>
                </div>

            </ListGroupItem>

        </ListGroup>
    )
}

export default NameList