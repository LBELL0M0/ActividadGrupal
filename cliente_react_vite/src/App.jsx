import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './MisComponentes.css'
import UserCard from './UserCard'
import UserProfile from './UserProfile'

function App() {
  const [count, setCount] = useState(0)

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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

      <h2>Perfiles</h2>
      <UserProfile
        user={{ name: "Ana Garcia", email: "ana.garcia@email.com", phone: "+44 1234 5678" }}
        showEmail={true}
        showPhone={false}
        layout="horizontal"
      />

      <UserProfile
        user={{ name: "Carlos López", email: "carlos.lopez@email.com", phone: "+44 9999 0000" }}
        showEmail={false}
        showPhone={true}
        layout="vertical"
      />

    </>
  )
}

export default App
