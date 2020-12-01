import { useState } from "react";
import calcSymbols from './calc-symbols';
import parsePlusSeparatedExpression from './math-expression-parser';
import Button from './Button';
import './foundation.min.css';
import './style.scss';

const App = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = parsePlusSeparatedExpression(value, '+');
    setValue(String(result));
  }

  const updateState = (e) => {
    setValue(e.target.value);
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" placeholder="Start Calculating..." value={ value } onChange={ updateState } />
      <div className="btn-container">
        <div>
            <div className="grid-4">
              {
                calcSymbols.group_1.map(num => 
                  <Button 
                  num={ num } 
                  value={ value } 
                  change={ handleChange } 
                  classy="group_1" 
                  keys={ num } />
                )
              }
            </div>
        </div>
        <div className="grid-container">
          <div>
            <div className="grid-3">
              {
                calcSymbols.group_2.map(num => 
                  <Button 
                  num={ num } 
                  value={ value } 
                  change={ handleChange } 
                  classy="group_2" 
                  keys={ num } />
                )
              }
            </div>
          </div>
          <div>
            <div className="grid-1">
              {
                calcSymbols.group_3.map(num => 
                  <Button 
                  num={ num } 
                  value={ value } 
                  change={ handleChange } 
                  classy="group_3" 
                  keys={ num } />
                )
              }
            </div>
          </div> 
        </div>
      </div>
    </form>
    );
}

export default App;