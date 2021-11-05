import logo from './logo.svg';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import './App.css';
import react from 'react';


class App extends react.Component{
  state = {
    todos: [
        {
            id: 1,
            titile: "reading book"
        },
        {
            id: 2,
            titile: "Workout"
        }
    ]
}
  render() {
    const {todos} = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <h3>Task List</h3>
        </div>
        <div className="ist">
          {todos.map(item =>
            <TodoItem key={item.id} todo={item}/>)}
          
        </div>
        <div className="input-form">
          <FormInput/>
        </div>
      </div>
    );
  }
}


export default App;
