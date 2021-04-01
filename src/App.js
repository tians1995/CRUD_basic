import logo from './logo.svg';
import './App.css';
import FormInput from "./components/FormInput"
import TodoItem from "./components/TodoItem"
import React from 'react';
import EditModal from './components/EditModal';
import DeleteModal from './components/DeleteModal';

class App extends React.Component {
  state = {
    todos:[{
      id: 1,
      title: "Reading a Book"
    },
    {
      id: 2,
      title: "Workout Training"
    }
  ],
  isEdit:false
}

deleteTask = id =>{
  this.setState({
    todos: this.state.todos.filter(item => item.id != id)
  })
}

addTask = data =>{
  const id = this.state.todos.length
  const newData = {
    id: id + 1,
    title: data 
  }
  this.setState({
    todos: [...this.state.todos, newData]
  })
}
openModal = () =>{
  this.setState({
    isEdit:true
  })
}
closeModal = () =>{
  this.setState({
    isEdit:false
  })
}
  render(){
    const { todos } = this.state;
  return (
    <div className="app">
   <div className="logo">
   <img src={logo} alt="logo" />
   <h3> Task List</h3>
   </div>
   <div className="List">
   {todos.map(item =>
   <TodoItem 
   key={item.id} 
   todo={item} 
   del={this.deleteTask}
   close={this.closeModal}
   open={this.openModal}
   deleted={this.openModal}
    />)}
   </div>
   <div className="input-form">
    <FormInput add={this.addTask} />
   </div>
   <DeleteModal  deleted={this.state.isEdit} close={this.closeModal}  />
   <EditModal edit={this.state.isEdit} close={this.closeModal} />
    </div>
   )
}
}


export default App;
