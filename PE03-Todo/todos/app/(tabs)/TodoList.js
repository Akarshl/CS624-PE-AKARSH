import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'
const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  todos = todos.map((todo, i) => {
    return ( // map over each todo and return a Todo component
      <Todo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo} />
    )
  })
  // Render the list of Todo components inside a container
  return (
    <View>
      {todos}
    </View>
  )
}

export default TodoList