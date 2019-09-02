import React, {Component} from 'react';
// import Todos from './Todos'

class Todo extends Component{
    state = {
            todos: [
                {id:1, content:'First'},
                {id:2, content:'Second'}
            ]
    }
render(){
    return(
        <div>
            <h1>This is the ToDo App</h1>

        {/* <Todos todos={this.state.todos} /> */}

        </div>
    )
}
}

export default Todo;