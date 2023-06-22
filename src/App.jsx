
import './App.css';
import ExampleOfPureComp from './Components/ExampleOfPureComp';
import WrapComp from './Components/WrapComp';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='div' style={{display:"flex",justifyContent:"space-around"}}>
          <Link to={'/ExampleOfPureComp'}>Pure Component Example</Link>
          <Link to={'/WrapComp'}>Higher order comp example</Link>
        </div>
        <Routes>
          <Route path='/ExampleOfPureComp' element={<ExampleOfPureComp />}></Route>
          <Route path='/WrapComp' element={<WrapComp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;