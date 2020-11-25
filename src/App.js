import { useState } from "react";
import Button from './Button';
// import './foundation.min.css';
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

  const clearEntry = () => {
    setValue(value.slice(0,-1));
  }

  return (
    <form className="grid" onSubmit={ handleSubmit }>
      <div className="grid-container">
        <label className="grid-1">
          <input type="text" value={ value } onChange={ updateState } style={{ width: '100vh' }} />
        </label>
      </div>
      <div className="grid-container">
        <div className="item1">
          <div className="grid-4">
            {
              ['(',')'].map(num => 
                <Button 
                num={ num } 
                value={ value } 
                change={ handleChange } 
                key={ num } classy={ 'small-3' } />
              )
            }
            <button type="button" id="C" value="C" onClick={ () => setValue('') } key="C" className="cell small-3 text-center">C</button>
            <button type="button" id="CE" value="CE" onClick={ clearEntry } key="CE" className="cell small-3 text-center">CE</button>
          </div>
        </div>
        <div className="item2">
          <div className="grid-3">
            {
              [7,8,9,4,5,6,1,2,3,0,'.'].map(num => 
                <Button 
                num={ num } 
                value={ value } 
                change={ handleChange } 
                key={ num } classy={ 'small-4' } />
              )
            }
            <button className="cell small-4 text-center" type="submit">=</button>
          </div>
        </div>
        <div className="item3">
          <div class="grid-1">
            {
              ['/','*','-','+'].map(num => 
                <Button 
                num={ num } 
                value={ value } 
                change={ handleChange } 
                keys={ num } classy={ 'small-4' } />
              )
            }
          </div>
        </div> 
      </div>
    </form>
    );
}

export default App;