import './App.css';
import Header from './components/Header'
import Main from './components/Project'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState(0);
  return (
    <div id="body-layer-2">
      <Header/>
      <Main selected={selected} setSelected={setSelected}/>
      <Footer/>
    </div>
  );
}

export default App;
