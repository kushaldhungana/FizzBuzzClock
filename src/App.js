import React, {useEffect,useState} from 'react';
import './App.css';

function App() {
  const[time, setTime] = useState(new Date().getSeconds());
    const [print, setPrint] = useState("");

    useEffect(() => {
      const timer = setTimeout(() => {
        setTime(new Date().getSeconds());
      }, 1000);
      fizzBuzz(time);
      return () => {
        clearTimeout(timer);
      };
    }, [time]);

    function fizzBuzz(time) {
      if (time % 3 === 0) {
        setPrint("Fizz");
      } else {
        setPrint("");
      }
      if (time % 5 === 0) {
        setPrint("Buzz");
      }
      if (time % 3 === 0 && time % 5 === 0) {
        setPrint("FizzBuzz");
      }
    }
    return (
      <div className="App">
        <h1>Fizz Buzz Clock</h1>
        <h2>Seconds: {time} </h2>
        <h2>{print}</h2>
      </div>
    );
}

export default App;
