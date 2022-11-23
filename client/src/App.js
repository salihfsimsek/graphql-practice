import React from 'react'
import Header from './Components/Header';

import { Routes, Route } from 'react-router-dom';

import { Home, CreateEvent } from './Pages';

function App() {
  return (
    <div className="h-screen">
      <Header />
      <div className='container min-h-[calc(100vh-4rem)] mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/create-event' element={<CreateEvent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
