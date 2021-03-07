import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends React.Component {
    renderTodos = () => {
        return this.props.todos.map(todo => <Todo key={ todo } todo={ todo } />)
    }

    render(){
        console.log(this.props)
        return(
            <div>
                { this.renderTodos() }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer)