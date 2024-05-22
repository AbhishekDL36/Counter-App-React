import {useState} from "react";
import "./App.css";

function App() {
  
  // let count = 0;
  const [count,setCount] = useState(0);
  



  function incrementHandler(){
    
    setCount(count+1);
  };

  function decrementHandler(){
    
    setCount(count-1);
  };

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className = "w-[100vw] h-[100vh] flex justify-center items-center gap-10 flex-col bg-[#344151]">

      <p className="text-[#0398d4] font-bold text-2xl">Increment And Decrement</p>

      <div className="bg-white flex flex-row gap-12 py-3 rounded-sm text-[25px]">

        <button className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={decrementHandler}>-</button>

        <div className="font-bold  text-5xl">{count}</div>

        <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={incrementHandler}>+</button>

      </div>
      <div>
      <button className="bg-[#0398d4] text-white px-10 py-3 rounded-sm text-lg" onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}

export default App;
