import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Navbar from './navbar';
import './components.css';

const Calculator = () => {
  const initVal = {
    total: 0,
    next: null,
    operation: null,
  };

  const [result, setResult] = useState(initVal);
  const { total, next, operation } = result;

  const handleBtn = (id) => {
    setResult((Object) => calculate(Object, id));
  };

  return (
    <div>
      <Navbar />
      <div className="calcBody">
        <p>Let&apos;s do some math!</p>
        <div className="calculator">
          <div className="screen">
            <p className="screen-text">
              <span>{total}</span>
              <span>{operation}</span>
              <span>{next}</span>
            </p>
          </div>

          <div className="buttons">
            <button
              className="btn"
              type="button"
              id="AC"
              onClick={(e) => handleBtn(e.target.id)}
            >
              AC
            </button>
            <button
              className="btn"
              type="button"
              id="+/-"
              onClick={(e) => handleBtn(e.target.id)}
            >
              +/-
            </button>
            <button
              className="btn"
              type="button"
              id="%"
              onClick={(e) => handleBtn(e.target.id)}
            >
              %
            </button>
            <button
              className="btn orange"
              type="button"
              id="÷"
              onClick={(e) => handleBtn(e.target.id)}
            >
              ÷
            </button>

            <button
              className="btn"
              type="button"
              id="7"
              onClick={(e) => handleBtn(e.target.id)}
            >
              7
            </button>
            <button
              className="btn"
              type="button"
              id="8"
              onClick={(e) => handleBtn(e.target.id)}
            >
              8
            </button>
            <button
              className="btn"
              type="button"
              id="9"
              onClick={(e) => handleBtn(e.target.id)}
            >
              9
            </button>
            <button
              className="btn orange"
              type="button"
              id="x"
              onClick={(e) => handleBtn(e.target.id)}
            >
              x
            </button>

            <button
              className="btn"
              type="button"
              id="4"
              onClick={(e) => handleBtn(e.target.id)}
            >
              4
            </button>
            <button
              className="btn"
              type="button"
              id="5"
              onClick={(e) => handleBtn(e.target.id)}
            >
              5
            </button>
            <button
              className="btn"
              type="button"
              id="6"
              onClick={(e) => handleBtn(e.target.id)}
            >
              6
            </button>
            <button
              className="btn orange"
              type="button"
              id="-"
              onClick={(e) => handleBtn(e.target.id)}
            >
              -
            </button>

            <button
              className="btn"
              type="button"
              id="1"
              onClick={(e) => handleBtn(e.target.id)}
            >
              1
            </button>
            <button
              className="btn"
              type="button"
              id="2"
              onClick={(e) => handleBtn(e.target.id)}
            >
              2
            </button>
            <button
              className="btn"
              type="button"
              id="3"
              onClick={(e) => handleBtn(e.target.id)}
            >
              3
            </button>
            <button
              className="btn orange"
              type="button"
              id="+"
              onClick={(e) => handleBtn(e.target.id)}
            >
              +
            </button>

            <button
              className="btn span-2"
              type="button"
              id="0"
              onClick={(e) => handleBtn(e.target.id)}
            >
              0
            </button>
            <button
              className="btn"
              type="button"
              id="."
              onClick={(e) => handleBtn(e.target.id)}
            >
              .
            </button>
            <button
              className="btn orange"
              type="button"
              id="="
              onClick={(e) => handleBtn(e.target.id)}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
