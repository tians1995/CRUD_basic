import React from "react"
import Button from "./Button"
import "../styles/DeleteModal.css"

class DeleteModal extends React.Component{
   
    render(){
        if(this.props.deleted){
        return(
            <div className="modal-container">
            <div className="modal-box">
            <h3>Are u sure?</h3>
            <div className="btn-group">
            <Button text="yes" variant="success" />
            <Button text="cancel" variant="warning" action="" />
            </div>
            </div>
            </div>
        )        
    }else{return null}
}
}
export default DeleteModal;