import './App.css';
import Swipper from './Swipper';
import { Data } from './Data';
function App() {
  console.log(Data);
  return (
    <div className="main">
      <div className="logo">
        <img
          src="https://lang-cards.netlify.app/static/media/react.7b78f5c3c3acf6dd7722fd9c2f83c963.svg"
          alt="react logo"
        />
      </div>
      <div className="container">
        <div className="title">
          <h1 className="lang">Languages</h1>
        </div>
        <div className="App">
          {Data.map((item, index) => (
            <Swipper {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
