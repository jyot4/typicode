// Check this out


import React ,{useState} from 'react'
import { useMemo } from 'react';

function Usememo() {
  
  const [input, setInputValue] = useState(0);
  const [theme, setTheme] = useState("light");

//   const square = handleClick(input);


  const square = useMemo(()=>{
    return handleClick(input)
  },[input])
  function handleClick(num) {
    for(let i=0;i<=2000000000;i++){}
    return num * num;
  }


  function handleThemeChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: theme == "light" ? "#fff" : "#000",
          color: theme == "light" ? "#000" : "#fff",
        }}
      >
        <input
          type="text"
          placeholder="Enter a number"
          value={input}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>{square}</p>

        <button onClick={handleThemeChange}>Change Theme</button>
      </div>
    </>
  );
}
 

export default Usememo
