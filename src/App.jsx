import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Studentui from './components/component/studentui'
// import Studentpage from './components/component/studentpage'

// import Login from './components/component/Login'
// import Pswdreset from './components/component/pswdreset'
import React from 'react'
// import QuizApp from './components/component/QuizApp'
import Detailspage from './components/component/detailspage'
// import Practicepage from './components/component/practicepage'
import Quizpage from './components/component/quizpage'
import Question from './components/component/Question'
import Assessmentpage from './components/component/Assessmentpage'
import Instructionpage from './components/component/instructionpage'


function App() {

  return (


    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/detailspage' element={<Detailspage/>}/>
    <Route path='/studentui' element={<Studentui/>}/>
    <Route path='/practicepage' element={<Question/>}/>
    <Route path='/quizpage' element={<Quizpage/>}/>
    <Route path='/assessmentpage' element={<Assessmentpage/>}/>
    <Route path='/instructionpage' element={<Instructionpage/>}/>
    </Routes>
    </BrowserRouter>
    </div>


  )
}

export default App
