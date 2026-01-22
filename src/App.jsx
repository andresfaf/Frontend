import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import RutaFormacionNet from './pages/RutaFormacionNet'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ruta-formacion-net" element={<RutaFormacionNet />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
