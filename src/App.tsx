import NavBar from './components/NavBar'
import Container from './components/Container'
import {CartProvider} from './contexts/CartContext'

function App() {

  return (
    <>
      <div className="relative min-h-screen">
        <CartProvider>
          <NavBar />

          <div className="container mx-auto p-3">
            <Container />
          </div>
        </CartProvider>
      </div>
    </>
  )
}

export default App
