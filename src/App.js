import './App.css';
import Swipper from './Swipper';
import { Data } from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  console.log(Data);
  return (
    <div className="App bg-warning">
      {Data.map((item, index) => (
        <Swipper {...item} key={index} />
      ))}
    </div>
  );
}

export default App;
