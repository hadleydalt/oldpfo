import './App.css';
import { Box1 } from './Box1'
import { Vertical } from './Vertical'
import { Horizontal } from './Horizontal'

function App() {
  return (
    <div className="App">
      <Vertical color="#EEDFB1"/>
      <Horizontal color="#EEDFB1"/>
      <Box1 planet={true} bg={true} height={290}/>
    </div>
  );
}

export default App;
