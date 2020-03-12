import React from 'react';
import './Footer.css';

export const Footer = () => (
  <div>
    <h2 className="Footer">Links to the other pages:</h2>

    <ul className="Lead">
      <li>
        Page1: <a href="https://react-flask-frameworks.herokuapp.com/">Frameworks</a>
      </li>
      <li>
        Page2:{' '}
        <a href="https://react-flask-frameworks.herokuapp.com/installation.html">
          Installation
        </a>
      </li>
      <li>
        Page3:{' '}
        <a href="https://react-flask-frameworks.herokuapp.com/tutorial.html">
          Tutorial
        </a>
      </li>
      <li>
        Page5:{' '}
        <a href="https://react-flask-frameworks.herokuapp.com/conclusion.html">
          Conclusion
        </a>
      </li>
      <li>
        Page6:{' '}
        <a href="https://react-flask-frameworks.herokuapp.com/credits.html">
          Credits
        </a>
      </li>
    </ul>
  </div>
);
