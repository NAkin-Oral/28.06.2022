import './App.css';
import Swipper from './Swipper';
import { Data } from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  console.log(Data);
  return (
    <div>
      <div className="title bg-primary m-0  text-center">
        <h1 className="lang">Languages</h1>
      </div>
      <div className="App bg-warning">
        {Data.map((item, index) => (
          <Swipper {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
