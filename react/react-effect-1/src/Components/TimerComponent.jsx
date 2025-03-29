import React, {useState,useEffect} from 'react'

function TimerComponent() {
    const [second, setSecond] =useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
          console.log("SetInterval Executed")
            setSecond(prevSeconds => prevSeconds +1);
        }, 1000);

        return() => {
          console.log("time to stop")
            clearInterval(intervalid);
        };
    }, [])

  return (
    <div>
      <h1>seconds: {second}</h1>
    </div>
  );
}

export default TimerComponent