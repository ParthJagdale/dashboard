
import './App.css';
import Home from './component/Home';
import Sidebar from './component/Sidebar';
import Header from './component/Header';

function App() {
  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
        <Home/>
      

    </div>  
  );
}

export default App;
