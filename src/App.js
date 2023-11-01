
import './App.css';
// import RandomUser from './randomuser/RandomUser';
// import Qr from './QrCode/Qr';
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Product from './Products api/Product';
import Country from './CountryList/Country';


function App() {
  
  
  return (
    <div className="App">
{/* <Product/> */}
{/* <BrowserRouter>

<Routes>
  <Route path='/' element={<Qr/>}></Route>
</Routes>
</BrowserRouter> */}

<Country/>

    </div>
  );
}

export default App;
