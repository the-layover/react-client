import { combineReducers } from 'redux';
import ExampleTodos from './exampleTodos.jsx';
import ExampleVisibilityFilter from './exampleVisibilityFilter.jsx';

const todoApp = combineReducers({
  ExampleTodos,
  ExampleVisibilityFilter
})

export default todoApp
