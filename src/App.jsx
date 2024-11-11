import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <Router>
      <Navbar/> 
      <Home/> 
      <Skills/>  
      <Projects/>
      <Contact/>
    </Router>
  )
}

export default App

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css'
// import Contact from './components/Contact'
// import Home from './components/Home'
// import Navbar from './components/Navbar'
// import Projects from './components/Projects'
// import Skills from './components/Skills'

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;
