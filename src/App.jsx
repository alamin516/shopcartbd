import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <Navbar></Navbar>

      <div>
        <Home></Home>
      </div>

      <Footer></Footer>
      
    </>
  )
}

export default App
