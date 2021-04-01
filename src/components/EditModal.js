import React from "react"
import Button from "./Button"
import "../styles/EditModal.css"

class EditModal extends React.Component{
   
    render(){
        const {edit,close} = this.props;
        if(edit){
        return(
            <div className="modal-container">
            <div className="modal-box">
            <h3>Edit Task</h3>
            <div className="input ">
            <input type="text" ></input>
            </div>
            <div className="btn-group">
            <Button text="save" variant="success" />
            <Button text="cancel" variant="warning" action={close} />
            </div>
            </div>
            </div>
        )
        
    }
else {
    return null;
}
}
}
export default EditModal;