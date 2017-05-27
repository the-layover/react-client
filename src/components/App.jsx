import React, { Component } from 'react';
import Footer from './Footer.jsx';
import AddTodo from '../containers/AddTodo.jsx';
import VisibleTodoList from '../containers/VisibleTodoList.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// )
//
// export default App;
