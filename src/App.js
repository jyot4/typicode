// import logo from './logo.svg';
import './App.css';
// import App from './reactImageFetcher/components';
// import Index from "./reactImageFetcher/components/Index";
import { useContext } from 'react';
import { thisContext } from './contextapi/ContextApi';


function App() {
  const {data,setData} = useContext(thisContext)
  // console.log(data)
  return (
    <div className="App">
      <p>{data}</p>
  {/* <Index/> */}
    </div>
  );
}

export default App;
