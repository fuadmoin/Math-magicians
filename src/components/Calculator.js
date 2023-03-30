import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = ({ data, result }) => {
  const handleClick = (event) => {
    data(event);
  };

  return (

    <>
      <section className="Calculator-Container">
        <div className="signs result">{result}</div>
        <button name="AC" type="button" onClick={handleClick} className="signs">AC</button>
        <button name="+/-" type="button" onClick={handleClick} className="signs">+/-</button>
        <button name="%" type="button" onClick={handleClick} className="signs ">%</button>
        <button name="÷" type="button" onClick={handleClick} className="signs rose">÷</button>
        <button name="7" type="button" onClick={handleClick} className="signs">7</button>
        <button name="8" type="button" onClick={handleClick} className="signs">8</button>
        <button name="9" type="button" onClick={handleClick} className="signs">9</button>
        <button name="x" type="button" onClick={handleClick} className="signs rose">x</button>
        <button name="4" type="button" onClick={handleClick} className="signs">4</button>
        <button name="5" type="button" onClick={handleClick} className="signs">5</button>
        <button name="6" type="button" onClick={handleClick} className="signs">6</button>
        <button name="-" type="button" onClick={handleClick} className="signs rose">-</button>
        <button name="1" type="button" onClick={handleClick} className="signs">1</button>
        <button name="2" type="button" onClick={handleClick} className="signs">2</button>
        <button name="3" type="button" onClick={handleClick} className="signs">3</button>
        <button name="+" type="button" onClick={handleClick} className="signs rose">+</button>
        <button name="0" type="button" onClick={handleClick} className="signs zero">0</button>
        <button name="." type="button" onClick={handleClick} className="signs ">.</button>
        <button name="=" type="button" onClick={handleClick} className="signs rose">=</button>
      </section>
    </>
  );
};

Calculator.propTypes = {
  data: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired,
};

const Display = () => {
  const [result, setResult] = useState(0);

  const handleEvent = (event) => {
    setResult((result) => calculate(result, event.target.name));
  };
  const { total, next, operation } = result;

  const output = `${total || operation || next ? `${total || ''} ${operation || ''} ${next || ''}` : 0}`;
  return (<Calculator data={handleEvent} result={output} />);
};

export default Display;
