//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Secondgreet from './components/Secondgreet';
import JSX from './components/JSX';
import PassList from './render/conditionalRendering';
import Display from './render/listRendering';
import CSE from './render/filter';
import MountingA from './lifeCycleMethods/mouting';
import MountingB from './lifeCycleMethods/moutingB';

function App() {
  return (
    <div className="App">
      {/*Functional Component*/}
      <Greet />
      {/*class Component*/}
      <Secondgreet />
      {/*JSX*/}
      <JSX />
      {/*conditional rendering*/}
      <PassList />
      {/*list rendering using map*/}
      <Display />
      {/*list rendering using filter*/}
      <CSE />
      {/*life cycle methods*/}
      <MountingA />
      <MountingB />
    </div>
  );
}

export default App;
