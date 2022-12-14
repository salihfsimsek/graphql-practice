import React from 'react'
import Header from './Components/Header';

import { Routes, Route } from 'react-router-dom';

import { Home, Events, CreateEvent, EventDetail } from './Pages';

function App() {
  return (
    <div className="h-screen">
      <Header />
      {/* container  mx-auto */}
      <div className='min-h-[calc(100vh-56px)]'>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/events' element={<Events />} />
          <Route path='/create-event' element={<CreateEvent />} />
          <Route path='/events/:id' element={<EventDetail />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
