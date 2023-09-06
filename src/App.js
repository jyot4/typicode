// import logo from './logo.svg';
import './App.css';
// import App from './reactImageFetcher/components';
// import Index from "./reactImageFetcher/components/Index";
import { useContext } from 'react';
import {context} from "./contextapi/ContextApi"


function App() {
  const{data,setData} =useContext(context)
  // console.log(data)
  return (
    <div className="App">
      <p>{data}</p>
  {/* <Index/> */}
    </div>
  );
}

export default App;
