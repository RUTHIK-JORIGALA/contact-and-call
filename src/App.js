import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Contact from './components/contacts/Contact'
import Main from './Main'
import Error from './Error'
import MissedCalls from './components/MissedCalls'
import Messages from './components/Messages'
import Rightdata from './components/rightdata/Rightdata'
import Calls from './components/Calls'

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route path='/' element={<Rightdata/>}/>
          <Route path='/calls' element={<Calls/>}/>
          <Route path='/missed' element={<MissedCalls/>}/>
          <Route path='/messages' element={<Messages/>}/>
        </Route>
        <Route path='/dialpad' element={<Contact/>}/>
        
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
