import './App.css';
import { Box1 } from './Box1'
import { Box2 } from './Box2'
import { Notepad } from './Notepad'
import { TitleBox } from './TitleBox'
import { ThreeButtons } from './ThreeButtons'
import { Vertical } from './Vertical'
import { Horizontal } from './Horizontal'

function App() {
  return (
    <div className="App">
      <Vertical color="#EEDFB1"/>
      <Horizontal color="#EEDFB1"/>
      <div className="content-wrapper">
        <Box1 planet={true} bg={true} height={290}/>
        <Box2 height={220}/>
        <Notepad height={330}/>
        <TitleBox />
        <ThreeButtons square={true}/>
        <ThreeButtons square={false}/>
      </div>
    </div>
  );
}

export default App;
