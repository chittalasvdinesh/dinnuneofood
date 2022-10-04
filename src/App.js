import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import './App.css'

function App() {
 
  return (
    <div className='bg-container'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
