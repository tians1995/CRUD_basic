import React, { useState }  from "react"
import Button from "./Button"
import PropTypes from "prop-types"
import EditModal from "./EditModal"
import DeleteModal from "./DeleteModal"

const TodoItem = ({ todo}) => {
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    
    return (
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                <Button text="edit" variant="success" action={function(event){setShowModalDelete(!showModalDelete)}} />
                <Button text="delete" variant="warning" action={function(event){setShowModalEdit(!showModalEdit)}} />
                {showModalDelete && <DeleteModal show={showModalDelete} close={!showModalDelete} />}
                {showModalEdit && <EditModal show={showModalEdit} close={!showModalEdit} />}
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired
}

export default TodoItem;

const todoItem = {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}