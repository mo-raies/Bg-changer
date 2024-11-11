import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer';

function App() {

  const [color, setColor] = useState('purple');
  // console.log('current bg color : ', color);


  return (

    <div className="container-fluid" style={{ backgroundColor: color, height: '100vh' }}>
      <Footer setColor={setColor} />
    </div>

  )
}

export default App
