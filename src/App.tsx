/* eslint-disable @typescript-eslint/no-unused-vars */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CardsItem from './components/basic/basic'
import Footer from './components/basic/footer'
import TatuajeForm, { type Tatuajes } from './components/basic/forms'
import Navbar from './components/basic/navbar'

// import ButtonAppBar from './components/header/header'

function App() {
  // const [count, setCount] = useState(0)
    const handleTatuajeSubmit = (data: Tatuajes) => {
    console.log("Tatuaje enviado:", data);
    // Aquí podrías llamar a tu API para guardar los datos
  };



  return (

    <>
      <Navbar></Navbar>
      <TatuajeForm onSubmit={handleTatuajeSubmit}></TatuajeForm>
      <CardsItem></CardsItem>
      <Footer></Footer>
    </>

  )
}

export default App
