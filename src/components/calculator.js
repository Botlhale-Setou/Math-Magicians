import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="screen">
          <p className="screen-text">0</p>
        </div>

        <div className="buttons">
          <button className="btn" type="button" id="ac">AC</button>
          <button className="btn" type="button" id="+/-">+/-</button>
          <button className="btn" type="button" id="%">%</button>
          <button className="btn orange" type="button" id="÷">÷</button>

          <button className="btn" type="button" id="7">7</button>
          <button className="btn" type="button" id="8">8</button>
          <button className="btn" type="button" id="9">9</button>
          <button className="btn orange" type="button" id="x">x</button>

          <button className="btn" type="button" id="4">4</button>
          <button className="btn" type="button" id="5">5</button>
          <button className="btn" type="button" id="6">6</button>
          <button className="btn orange" type="button" id="-">-</button>

          <button className="btn" type="button" id="7">1</button>
          <button className="btn" type="button" id="8">2</button>
          <button className="btn" type="button" id="9">3</button>
          <button className="btn orange" type="button" id="+">+</button>

          <button className="btn span-2" type="button" id="0">0</button>
          <button className="btn" type="button" id=".">.</button>
          <button className="btn orange" type="button" id="=">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
