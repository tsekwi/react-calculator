import { useState } from "react";
import Button from './Button';
import './foundation.min.css';
import './style.scss';

const App = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(eval(value));
  }

  const updateState = (e) => {
    setValue(e.target.value);
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  }

  const clearEntry = () => {
    setValue(value.slice(0,-1));
    console.log(value);
  }

  return (
    <form className="grid-container" onSubmit={ handleSubmit }>
      <div className="grid-x grid-padding-x">
        <div className="cell small-12">
          <label>
            <input type="text" value={ value } onChange={ updateState } />
          </label>
        </div>
      </div>

      <div className="grid-x">
        <div className="cell small-12">
          <div className="grid-x">
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
      </div>

      <div className="grid-x">
        <div className="cell small-9">
          <div className="grid-x">
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
        <div className="cell small-3">
          <div className="grid-y">
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
