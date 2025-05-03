import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Input from './Input';
import Heading from './Heading';
import TodoList from './TodoList';
import TabBar from './TabBar';
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  deleteTodo(todoKey) { // delete a todo by filtering it out using its index
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.key !== todoKey);
    this.setState({ todos });
  }
  toggleComplete(todoKey) {
    const todos = this.state.todos.map((todo) => {
      if (todo.key === todoKey) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    this.setState({ todos });
  }
  inputChange = (inputValue) => { // update state when input text changes
    this.setState({ inputValue });
  };
  submitTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() === '') return;
    const newTodo = {
      title: inputValue,
      key: Date.now(), // Unique identifier
      complete: false,
    };
    this.setState({
      todos: [...todos, newTodo],
      inputValue: '',
    });
  };
  render() {
    const { inputValue, todos, type } = this.state;
    const filteredTodos = todos.filter((todo) => {
      if (type === 'All') return true;
      if (type === 'Complete') return todo.complete;
      if (type === 'Active') return !todo.complete;
    });
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={this.inputChange}
            submitTodo={this.submitTodo}
          />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={filteredTodos} // Show only filtered todos
          />
          <TabBar
            setType={(type) => this.setState({ type })}
            type={type}
          />
        </ScrollView>
      </View>
    );
  }
}
// Styling for the main container and scrollable content
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
export default App;
