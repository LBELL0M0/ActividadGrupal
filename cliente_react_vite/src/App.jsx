import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './MisComponentes.css'
import UserCard from './UserCard'
import Producto from './Producto'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Actividad grupal</h1>

      <div>
        <UserCard 
            name="Ana García" 
            email="ana.garcia@email.com" 
            age={25} 
            isOnline={true} 
          />
        <UserCard 
            name="Carlos López" 
            email="carlos.lopez@email.com" 
            age={30} 
            isOnline={false} 
          />
      </div>
      <div>
        <Producto 
          nombre="Mouse Inalámbrico" 
          precio={50} 
          descuento={0} 
          categoria="Accesorios" 
        />
        <Producto 
          nombre="Teclado Mecánico" 
          precio={150} 
          descuento={15} 
          categoria="Periféricos" 
        />
      </div>
    </>
  )
}

export default App
