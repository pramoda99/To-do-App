
// import React, { useState } from 'react';
// import TodoForm from './TodoForm';
// import Todo from './Todo';

// function Hero() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = todo => {
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return;
//     }

//     const newTodos = [todo, ...todos];

//     setTodos(newTodos);
//     console.log(...todos);
//   };

//   const updateTodo = (todoId, newValue) => {
//     if (!newValue.text || /^\s*$/.test(newValue.text)) {
//       return;
//     }

//     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
//   };

//   const removeTodo = id => {
//     const removedArr = [...todos].filter(todo => todo.id !== id);

//     setTodos(removedArr);
//   };

//   const completeTodo = id => {
//     let updatedTodos = todos.map(todo => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   return (
//     <>
//       <h1>My Todo List</h1>
//       <TodoForm onSubmit={addTodo} />
//       <Todo
//         todos={todos}
//         completeTodo={completeTodo}
//         removeTodo={removeTodo}
//         updateTodo={updateTodo}
//       />
//     </>
//   );
// }

// export default Hero;

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const Hero = ({handleLogout}) => {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


    return(
        
        <div className="hero" >
 
    <nav>
    <h2></h2>
        <button className="btn1" onClick={handleLogout}>Logout</button>
        </nav>
        <center> <h1>My Todo list</h1></center>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    
</div>
  
  )
}

export default Hero;