import { useState } from "react";
import calcSymbols from './calc-symbols';
import Button from './Button';
import './foundation.min.css';
import './style.scss';

const App = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(prevValue => eval(prevValue));
    setValue(prevValue => prevValue.toString());
    // "(8--2)".split("").map(item => {
    //   if (Number(item) == item) 
    //     return Number(item);
    //   else return item;
    // });
    // https://medium.com/@stoopidguy1992/how-to-write-a-math-expression-parser-in-javascript-b5147bc9466b
  }
  const updateState = (e) => {
    setValue(e.target.value);
  }
  const handleChange = (newValue) => {
    setValue(newValue);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" value={ value } onChange={ updateState } style={{ width: '100%' }} />
      <div className="grid-container">
        <div className="item1" key="item-1">
          <div className="grid-4">
            {
              calcSymbols.group_1.map(num => 
                <Button 
                num={ num } 
                value={ value } 
                change={ handleChange } 
                keys={ num } />
              )
            }
          </div>
        </div>
        <div className="item2" key="item-2">
          <div className="grid-3">
            {
              calcSymbols.group_2.map(num => 
                <Button 
                num={ num } 
                value={ value } 
                change={ handleChange } 
                keys={ num } />
              )
            }
          </div>
        </div>
        <div className="item3" key="item-3">
          <div className="grid-1">
            {
              calcSymbols.group_3.map(num => 
                <Button 
                num={ num } 
                value={ value } 
                change={ handleChange } 
                keys={ num } />
              )
            }
          </div>
        </div> 
      </div>
    </form>
    );
}

export default App;