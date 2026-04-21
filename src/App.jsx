import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './component/sidebar'
import About from './pages/About'
import Profile from './pages/Profile'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className='w-1/3'>
        <Sidebar />
      </div>

      <div className='w-2/5 p-6'>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
