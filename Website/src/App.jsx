import './App.css'
import './styles/Header.css'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Project from './pages/Project.jsx'
import Layout from './components/Layout.jsx'

function App() {
  return(
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
      
    
  )
  
}

export default App
