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

  return (

    <>
      <Navbar></Navbar>
      <TatuajeForm onSubmit={function (data: Tatuajes): void {
        throw new Error('Function not implemented.')
      } }></TatuajeForm>
      <CardsItem></CardsItem>
      <Footer></Footer>
    </>

  )
}

export default App
