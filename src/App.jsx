import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <div className="container">
        <h2>STOP WATCH</h2>
        <div className="content">
          <div className="timer">
            <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((timer / 60000) % 60)).slice(-2)}</span>
          </div>
          <div className="btn-group">
            {running ? (
              <button
                className="stop"
                onClick={() => {
                  setRunning(false);
                }}
              >
                Stop
              </button>
            ) : (
              <button
                className="start"
                onClick={() => {
                  setRunning(true);
                }}
              >
                Start
              </button>
            )}

            <button
              className="reset"
              onClick={() => {
                setTimer(0);
              }}
            >
              Reset
            </button>
          </div>
          <p>AX</p>
        </div>
      </div>
    </div>
  );
};

export default App;
