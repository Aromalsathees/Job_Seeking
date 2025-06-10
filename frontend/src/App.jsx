import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home1 from './pages/Home1'
import Home2 from './pages/Home2'
import Joblisting from './pages/Joblisting'
import Jobtitles from './pages/Jobtitles'


export default function App() {
  return (
    <>

    <Router>
      <Routes>



{/* 
Home Roter starts */}
        <Route 
        path="/"
        element={
          <>
             <Header/>
             <Home1/>
             <Home2/>
             <Footer/>
          </>
        }
      />
{/* 
Home Roter ends */}

{/* 
Joblisting Roter starts */}

        <Route 
        path="/joblisting"
         element={
        <>
         <Header/>
         <Joblisting/>
         <Footer/>
        </>
      }/>        
{/* ends */}


{/* Job title starts here */}
<Route
path="/jobtitles/:id"
element={
  <>
  <Header/>
  <Jobtitles/>
  <Footer/>
  </>
}/>
{/* Job title ends here */}


      </Routes>
    </Router>
    
    </>
  )
}
