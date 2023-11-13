//! 07-11-2023 (TO-DO APP)

  // import React from 'react'
  // import ToDo from './ToDoApp/ToDo'
  // import "./ToDo.css"

  // const App = () => {
  //   return (
  //     <>
  //     <ToDo/>
  //     </>
  //   )
  // }

  // export default App

//!----------------------------------------------------------------

//! 09-11-2023 (CRUD APP)

  import React from 'react'
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import Home from './CRUD-App/Home'
  import Create from './CRUD-App/Create'
  import Read from './CRUD-App/Read'
  import Update from './CRUD-App/Update'
  
  const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/read/:id' element={<Read/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default App