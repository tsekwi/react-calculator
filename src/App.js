// import logo from './logo.svg';
// import './App.css';
import './style.scss';

function App() {
  return (
    <div className="application">
    <div className="row">
      <div className="flex-container">
        <div id="numbers"></div>
      </div>
    </div>
    <div className="flex-container row">
      <div className="flex-item-3">
        <div className="flex-container row">
          <div className="flex-item-1">
            <span id="clearBtn">C</span>
            <span id="sevenNum">7</span>
            <span id="fourNum">4</span>
            <span id="oneNum">1</span>
          </div>
          <div className="flex-item-1">
            <span id="divideNum">
              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
                <g>
                  <rect fill="#0080FF" y="225" width="500" height="50" />
                  <rect fill="#0080FF" stroke="#0080FF" stroke-width="10" x="225" y="50" width="50" height="50" />
                  <rect fill="#0080FF" stroke="#0080FF" stroke-width="10" x="225" y="400" width="50" height="50" />
                </g>
              </svg> */}
            </span>
            <span id="eightNum">8</span>
            <span id="fiveNum">5</span>
            <span id="twoNum">2</span>
          </div>
          <div className="flex-item-1">
            <span id="multiplyNum">
              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
                <polygon fill="#0080FF" stroke="#0080FF" stroke-width="10" points="444.454,91.901 409.099,56.545 250,215.645 90.901,56.545 55.546,91.901 214.645,251 55.546,410.1 90.901,445.455 250,286.355 409.099,445.455 444.454,410.1 285.355,251" />
              </svg> */}
            </span>
            <span id="nineNum">9</span>
            <span id="sixNum">6</span>
            <span id="threeNum">3</span>
          </div>
        </div>
        <div className="flex-container row">
          <div className="flex-item-2">
            <span id="zeroNum">0</span>
          </div>
          <div className="flex-item-1">
            <span id="dotNum">
              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
                <rect x="212.5" y="375.001" width="75" height="75" />
              </svg> */}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-item-1">
        <span id="clearNumBtn">
          {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="50px" height="50px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
            <g>
              <path fill="#0080FF" d="M500,125.294c0-7.859-6.372-14.236-14.236-14.236l-327.176,0.051c-1.729,0-3.313,0.621-4.551,1.649L2.488,244.451
              C0.969,245.757,0,247.699,0,249.858v0.283c0,2.16,0.969,4.101,2.488,5.408l151.549,131.692c1.237,1.028,2.822,1.649,4.551,1.649
              l327.176,0.051c7.864,0,14.236-6.376,14.236-14.235V125.294z" />
              <path fill="#FFFFFF" d="M366.098,170.486l-52.522,52.532l-52.527-52.532c-3.425-3.42-8.967-3.42-12.387,0.009l-14.454,14.449
              c-3.42,3.42-3.425,8.972-0.005,12.392l52.527,52.522l-52.522,52.522c-3.42,3.42-3.425,8.973-0.005,12.393l14.454,14.458
              c3.42,3.42,8.972,3.42,12.392,0l52.527-52.522l52.522,52.522c3.42,3.42,8.972,3.42,12.392,0l14.454-14.458
              c3.425-3.42,3.42-8.973-0.005-12.393l-52.522-52.522l52.527-52.522c3.42-3.42,3.42-8.972-0.005-12.392l-14.449-14.458
              C375.064,167.066,369.522,167.066,366.098,170.486z" />
            </g>
          </svg> */}
        </span>
        <span id="minusNum">
          {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
            <rect fill="#0080FF" y="225" width="500" height="75" />
          </svg> */}
        </span>
        <span id="plusNum">
          {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
            <polygon fill="#0080FF" stroke="#0080FF" stroke-width="10" points="500,225 275,225 275,0 225,0 225,225 0,225 0,275 225,275 225,500 275,500 275,275 500,275" />
          </svg> */}
        </span>
        <span id="submitBtn">
          {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
            <rect y="125" width="500" height="75" fill="#FFFFFF" />
            <rect y="325" width="500" height="75" fill="#FFFFFF" />
          </svg> */}
        </span>
      </div>
    </div>
  </div>
  );
}

export default App;
