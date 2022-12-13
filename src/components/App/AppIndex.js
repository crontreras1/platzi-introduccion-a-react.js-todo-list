import React from "react";
import { TodoProvider } from '../TodoContext/TodoContext';
import { App } from './App';

function AppIndex() {
  return (
    <TodoProvider>
      <App/>
    </TodoProvider>
  )
}

export default AppIndex;