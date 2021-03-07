import React from 'react'

// class Todo extends React.Component {
//     render(){
//         return(
//             <div>
//                 <p>{ this.props.todo }</p>
//             </div>
//         )
//     }
// }

const Todo = props => {
    return(
        <div>
            <p>{ props.todo }</p>
        </div>
    )
}

export default Todo