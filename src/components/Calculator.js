import React from 'react';
import './calculator.css';

const Calculator = () => (
  <>
    <section className="Calculator-Container">
      <div className="signs result">0</div>
      <div className="signs">AC</div>
      <div className="signs">+/-</div>
      <div className="signs ">%</div>
      <div className="signs rose">÷</div>
      <div className="signs">7</div>
      <div className="signs">8</div>
      <div className="signs">9</div>
      <div className="signs rose">x</div>
      <div className="signs">4</div>
      <div className="signs">5</div>
      <div className="signs">6</div>
      <div className="signs rose">-</div>
      <div className="signs">1</div>
      <div className="signs">2</div>
      <div className="signs">3</div>
      <div className="signs rose">+</div>
      <div className="signs zero">0</div>
      <div className="signs rose">=</div>
    </section>
  </>
);

export default Calculator;
